import { DialogConfigCollection } from "./dialog-configuration";
import { v1 } from 'uuid';

export function Dialog(config: DialogConfigCollection) { 
    return function (target: Function) {       
       target.prototype['is-ngrx-ui-dialog-component'] = true;
       target.prototype['ngrx-dialog-unique-id'] = v1();
       target.prototype['dialog-registered-in-dialog-manager'] = false;
       target.prototype['ngrx-ui-dialog-configuration-collection'] = config;       
    }
}