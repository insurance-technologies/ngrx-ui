import { DialogConfigCollection } from "./dialog-configuration";
import { v1 } from 'uuid';
import { dialogMap } from './dialog-map';
import { Type } from '@angular/core';

export function Dialog(config: DialogConfigCollection) { 
    return function (target: Function) {
       let id = v1();

       target.prototype['is-ngrx-ui-dialog-component'] = true;
       target.prototype['ngrx-dialog-unique-id'] = id;
       target.prototype['dialog-registered-in-dialog-manager'] = false;
       target.prototype['ngrx-ui-dialog-configuration-collection'] = config;    
       
       dialogMap.set(id, target as Type<any>);       
    }
}