import { Component, Input, ElementRef, Renderer2 } from '@angular/core';

import { DialogTestingComponent } from './dialog.testing.component';
import { MessageDlgComponent } from './../../dialog/message.dlg.component';

import { CoreModel } from './../../../core/coreModel';
import { CoreModelProvider } from './../../../core/core.model.provider';

@Component({
  selector: 'accordion-zero',
  templateUrl: './view/accordion.zero.component.html',
  providers: [ CoreModelProvider ]
})
export class AccordionZeroComponent {

  @Input() _parent:DialogTestingComponent;

  private _frm:any={};

  constructor(private _element:ElementRef,
    private _renderer:Renderer2,
    private _coreModel:CoreModel) {

    this._frm={
      'message': '', 'title': '',
      'warning': 'no', 'btn2': 'no',
      'btn2_lbl': '', 'btn1_lbl': ''
    };
  }

  private showDlg_0(_e:Event) {
    let _opt:any={};

    _opt[MessageDlgComponent.DLG_TYPE]=MessageDlgComponent.DLG_TYPE_HELP;
    _opt[MessageDlgComponent.DLG_MESSAGE]=this._frm['message'];
    _opt[MessageDlgComponent.DLG_TITLE]=this._frm['title'];
    _opt[MessageDlgComponent.DLG_WARNING]=(this._frm['warning']=='yes'?true:false);
    _opt[MessageDlgComponent.DLG_NEED_BUTTON_TWO]=(this._frm['btn2']=='yes'?true:false);
    _opt[MessageDlgComponent.DLG_BUTTON_ONE_LABEL]=this._frm['btn1_lbl'];
    _opt[MessageDlgComponent.DLG_BUTTON_TWO_LABEL]=this._frm['btn2_lbl'];

    this._coreModel.setDataByKey(MessageDlgComponent.CMODEL_KEY, _opt, true);
    MessageDlgComponent.showDlg(
      this._element.nativeElement.querySelector('#dlgMessage'), this._renderer);
  }
}
