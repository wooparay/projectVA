import { NgFor } from '@angular/common';
import { Component, ElementRef, Renderer2 } from '@angular/core';

import { CoreModel } from './../../core/coreModel';
import { CoreModelProvider } from './../../core/core.model.provider';

import { MessageDlgComponent } from './../dialog/message.dlg.component';
import { FileUploadComponent } from './../dialog/file.upload.component';
import { PhotoBigPreviewComponent } from './../photopicker/photo.big.preview.dialogue';

import { ICoreModelLifeCycle } from './../../interface/i.core.model.lifecycle';
//import { AIOConfigService } from './../../core/aio.config';

@Component({
  selector: 'dialog-testing',
  templateUrl: './view/dialog.testing.component.html',
  providers: [ CoreModelProvider ]
})
export class DialogTestingComponent implements ICoreModelLifeCycle {

  public static CMODEL_KEY:string='DialogTestingComponent';

  constructor(private _coreModel:CoreModel) {

  }
  ngOnDestroy() {
    this.cleanupDataBasedOnKey(DialogTestingComponent.CMODEL_KEY);
// checking
console.log(this._coreModel.getFieldSetKeys());
  }


  /* ------------------ */
  /*  implementations   */
  /* ------------------ */

  public cleanupDataBasedOnKey(_key:string):any {
    this._coreModel.removeDataByKey(_key);
  }

}
