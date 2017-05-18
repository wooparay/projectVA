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
  private _formObject:any={};

  constructor(private _element:ElementRef,
    private _renderer:Renderer2,
    private _coreModel:CoreModel) {

    this._formObject['0']={
      'message': '', 'title': '',
      'warning': 'no', 'btn2': 'no',
      'btn2_lbl': '', 'btn1_lbl': ''
    };
  }
  ngOnDestroy() {
    this.cleanupDataBasedOnKey(DialogTestingComponent.CMODEL_KEY);
    // checking
    //console.log(this._coreModel.getFieldSetKeys());
  }


  /* ------------------ */
  /*  implementations   */
  /* ------------------ */

  public cleanupDataBasedOnKey(_key:string):any {
    this._coreModel.removeDataByKey(_key);
    this._coreModel.removeDataByKey(MessageDlgComponent.CMODEL_KEY);
  }

  /* ---------------- */
  /*  event handler   */
  /* ---------------- */
  private showTweekOption(_idx:number) {
    let _curIdx:number=0;
    let _btnId:string = 'btn_'+_idx;
    let _es:any=this._element.nativeElement.querySelectorAll('div.dialog-testing-dlg-scroll-container button.btn');
    if (_es) {
      for (let _e of _es) {
        if (_e.id != _btnId) {
          this._renderer.removeClass(this._element.nativeElement.querySelector('#'+_e.id), "active");
        }
        if (_curIdx!=_idx) {
          let _dTweek:any=this._element.nativeElement.querySelector('#divTweek_'+_curIdx);
          this._renderer.removeClass(_dTweek, "showing");
          this._renderer.addClass(_dTweek, "hiding");
        }
        _curIdx++;
      } // end -- for (_es to apply active class or not)
    } // end -- _es (elements are valid)
    this._renderer.addClass(this._element.nativeElement.querySelector('#'+_btnId), "active");

    let _dTweek:any=this._element.nativeElement.querySelector('#divTweek_'+_idx);
    this._renderer.removeClass(_dTweek, "hiding");
    this._renderer.addClass(_dTweek, "showing");
  }

  private showDlg_0(_e:Event) {
    let _opt:any={};

    _opt[MessageDlgComponent.DLG_TYPE]=MessageDlgComponent.DLG_TYPE_HELP;
    _opt[MessageDlgComponent.DLG_MESSAGE]=this._formObject['0']['message'];
    _opt[MessageDlgComponent.DLG_TITLE]=this._formObject['0']['title'];
    _opt[MessageDlgComponent.DLG_WARNING]=(this._formObject['0']['warning']=='yes'?true:false);
    _opt[MessageDlgComponent.DLG_NEED_BUTTON_TWO]=(this._formObject['0']['btn2']=='yes'?true:false);
    _opt[MessageDlgComponent.DLG_BUTTON_ONE_LABEL]=this._formObject['0']['btn1_lbl'];
    _opt[MessageDlgComponent.DLG_BUTTON_TWO_LABEL]=this._formObject['0']['btn2_lbl'];

    this._coreModel.setDataByKey(MessageDlgComponent.CMODEL_KEY, _opt, true);
    MessageDlgComponent.showDlg(
      this._element.nativeElement.querySelector('#dlgMessage'), this._renderer);
  }
  private showDlg_1(_e:Event) {
    console.log('dlg_1');
  }
}
