import { Injectable, Type, OnDestroy } from '@angular/core';
import * as dialogTools from './dialog-tools';
import * as fromDialog from './state/dialog-reducer';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { filter, skip, withLatestFrom } from 'rxjs/operators';
import { DialogInfo } from './state/dialog-reducer';
import { OpenDialog, CloseDialogWithError } from './state/dialog-actions';
import { DialogConfig } from './dialog-configuration';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

@Injectable()
export class DialogManager implements OnDestroy
{    
    private _dialogs: Map<string, Type<any>>;
    
    private isDialogOpen$: Observable<boolean>;    

    private _lastMediaChange : MediaChange;

    private _lastMediaChangeSubscription: Subscription;

    constructor(private store: Store<any>, mediaObserver: MediaObserver){       

        this.isDialogOpen$ = store.select(fromDialog.getIsDialogOpen);
                
        this._lastMediaChangeSubscription = mediaObserver
        .asObservable()
        .pipe(filter(changes=>changes.length>0))
        .subscribe(changes=>{
            this._lastMediaChange = changes[0];
        });
    }

    openDialog<T, C>(component: Type<C> , data: any, config?: string) : Promise<T>
    {
       //make sure that the component is a valid dialog
       if(!dialogTools.isDialogComponent(component))
         throw 'This component is not a dialog. Make sure to put the @Dialog decorator in the component.';
       
       //if is not registered in the map, added.
       if(!dialogTools.isDialogRegistered(component))
         this._dialogs.set(dialogTools.getDialogId(component), component);
    
       //create the promise that observe when the dialog close to get the result or the error
       let promise = new Promise( (resolve, reject) => {

         this.isDialogOpen$.pipe( 
             filter(isOpen => !isOpen), //only when the dialog close
             skip(1), //skip the first one that is the current one
             withLatestFrom(this.store) )
             .subscribe( ([isOpen, state])=>{

               let dState = state['dialogState'] as fromDialog.State;

               if(dState.dialogError)
                 reject(dState.dialogError);
               else
                 resolve(dState.dialogResult);

             } );
             
       } );

       this.store.dispatch( new OpenDialog(
            component.name, dialogTools.getDialogId(component),
            config ? dialogTools.getDialogConfiguration(component)[config] : this.selectBestConfiguration(component)));

       return promise as Promise<T>;
    }
    
    forceCloseDialog() : void
    {
        this.store.dispatch(new CloseDialogWithError('dialog forced to close'));
    }   

    private selectBestConfiguration(component: Type<any>) : DialogConfig
    {
        let configuration = dialogTools.getDialogConfiguration(component);
        if(!this._lastMediaChange)
          return configuration.default;

        switch(this._lastMediaChange.mqAlias)
        {
            case 'xs':
              return configuration.xs ? configuration.xs : configuration.default;

            case 'sm':
              return configuration.xs ? configuration.SM : configuration.default;

            case 'md':
              return configuration.xs ? configuration.md : configuration.default;

            case 'lg':
              return configuration.xs ? configuration.lg : configuration.default;

            case 'xl':
              return configuration.xs ? configuration.xl : configuration.default;

            case 'lt-sm':
              return configuration.xs ? configuration.ltsm : configuration.default;

            case 'lt-md':
              return configuration.xs ? configuration.ltmd : configuration.default;

            case 'lt-lg':
              return configuration.xs ? configuration.ltlg : configuration.default;

            case 'lt-xl':
              return configuration.xs ? configuration.ltxl : configuration.default;

            case 'gt-xs':
              return configuration.xs ? configuration.gtxs : configuration.default;

            case 'gt-sm':
              return configuration.xs ? configuration.gtsm : configuration.default;

            case 'gt-md':
              return configuration.xs ? configuration.gtmd : configuration.default;

            case 'gt-lg':
              return configuration.xs ? configuration.gtlg : configuration.default;

            default:
              return configuration.default;
        }

    }

    ngOnDestroy(): void {
        this._lastMediaChangeSubscription.unsubscribe();
    }

}
