import { Action } from '@ngrx/store';
import { DialogConfig } from '../dialog-configuration';

export enum ActionTypes
{    
    OpenDialog = '[DialogManager] OpenDialog',    
    CloseDialogWithResult = '[DialogManager] CloseDialogWithResult',  
    CloseDialogWithError = '[DialogManager] CloseDialogWithError'  

}

export class OpenDialog implements Action
{
   readonly type = ActionTypes.OpenDialog;   
   constructor( public name: string, public uniqueId: string, public configuration: DialogConfig ){}
}

export class CloseDialogWithResult implements Action
{
   readonly type = ActionTypes.CloseDialogWithResult;   
   constructor(public result: any){}
} 


export class CloseDialogWithError implements Action
{
   readonly type = ActionTypes.CloseDialogWithError;   
   constructor(public error: any){}
} 


export type DialogActions = 
OpenDialog |
CloseDialogWithResult |
CloseDialogWithError;