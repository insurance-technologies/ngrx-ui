import { Type } from "@angular/core";
import { DialogConfigCollection } from './dialog-configuration';


export function isDialogComponent(component: Type<any>) : boolean {   
    return component.prototype['is-ngrx-ui-dialog-component'] ? true : false;
}

export function getDialogId(component: Type<any>) : string{
    if(isDialogComponent(component))
      return component.prototype['ngrx-dialog-unique-id'];
    else
      return undefined;  
}

export function isDialogRegistered(component: Type<any>) : boolean{
    
    if(isDialogComponent(component))
      return component.prototype['dialog-registered-in-dialog-manager'];
    else
      return undefined;
}

export function getDialogConfiguration(component: Type<any>) : DialogConfigCollection
{
    if(isDialogComponent(component))
      return component.prototype['ngrx-ui-dialog-configuration-collection'];
    else
      return undefined;
}