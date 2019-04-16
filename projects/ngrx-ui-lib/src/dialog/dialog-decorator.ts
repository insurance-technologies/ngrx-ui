import { DialogConfigCollection } from "./dialog-configuration";

function Dialog(config: DialogConfigCollection) { 
    return function (target: Function) {       
       target.prototype['is-ngrx-ui-dialog-component'] = true;
       target.prototype['ngrx-ui-dialog-configuration-collection'] = config;       
    }
}