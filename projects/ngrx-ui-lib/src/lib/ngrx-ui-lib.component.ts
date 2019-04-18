import { Component, OnInit } from '@angular/core';
import { Dialog } from '../dialog/dialog-decorator';
import { DialogManager } from '../dialog/dialog-manager';

@Dialog({
  default:{
    width: '720px'
  },
  xs:{
    width: '230px'
  },  
  md:{
    
  },  
})
@Component({
  selector: 'rxui-ngrx-ui-lib',
  template: `
    <p>
      ngrx-ui-lib works!
    </p>
  `,
  styles: []
})
export class NgrxUiLibComponent implements OnInit {

  constructor(private dialogManager: DialogManager) { }

  async ngOnInit() {

    let result = await this.dialogManager.openDialog(NgrxUiLibComponent, {});

  }

}
