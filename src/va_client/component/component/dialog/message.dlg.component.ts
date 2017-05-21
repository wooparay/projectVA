import { Component, ElementRef, Renderer2, Input } from '@angular/core';

import { NgIf } from '@angular/common';

import { CoreModel } from './../../core/coreModel';
import { CoreModelProvider } from './../../core/core.model.provider';

//import { PhotoPickerComponent } from './photo.picker.component';
//import { FileReaderService, FileReaderServiceProvider } from './../core/file.reader';

import { GenericDlgComponent } from './generic.dlg.component';

@Component({
  selector: 'message-dlg',
  templateUrl: './view/message.dlg.component.html',
  providers: [ CoreModelProvider ]
})
export class MessageDlgComponent extends GenericDlgComponent {

  public static CMODEL_KEY:string = "MessageDlgComponent";
  public static DLG_TITLE:string = "DLG_TITLE";
  public static DLG_MESSAGE:string = "DLG_MESSAGE";
  public static DLG_WARNING:string = "DLG_WARNING";
  public static DLG_TYPE:string = "DLG_TYPE";
  public static DLG_NEED_BUTTON_TWO:string = "DLG_NEED_BUTTON_TWO";
  public static DLG_BUTTON_ONE_LABEL:string="DLG_BUTTON_ONE_LABEL";
  public static DLG_BUTTON_TWO_LABEL:string="DLG_BUTTON_TWO_LABEL";
  public static DLG_BUTTON_ONE_CALLBACK:string="DLG_BUTTON_ONE_CALLBACK";
  public static DLG_BUTTON_TWO_CALLBACK:string="DLG_BUTTON_TWO_CALLBACK";

  // constants for DLG_TYPE
  public static DLG_TYPE_MESSAGE:string = "message";
  public static DLG_TYPE_HELP:string = "help";

  // parent component (could be anything, hence didn't state the "type")
  @Input() _parent:any;

  private _message:string='*** some message ***';
  private _showWarning:boolean=false;
  private _showButtonTwo:boolean=true;
  private _isHelpDlg:boolean=false;
  private _buttonOneCallback:any=null;
  private _buttonTwoCallback:any=null;

  /**
   *  contructor
   */
  constructor(private _element:ElementRef,
    private _renderer:Renderer2,
    private _coreModel:CoreModel) {
    super();
  }
  ngAfterContentChecked() {
    let _opt:any = this._coreModel.getDataByKey(MessageDlgComponent.CMODEL_KEY);
    if (_opt) {
      this._message=_opt[MessageDlgComponent.DLG_MESSAGE];
      this.titleLabel=_opt[MessageDlgComponent.DLG_TITLE];

      let _warning:boolean=_opt[MessageDlgComponent.DLG_WARNING];
      if (_warning && _warning==true) {
        this._showWarning=true;
      } else this._showWarning=false;

      let _needBtn2:boolean=_opt[MessageDlgComponent.DLG_NEED_BUTTON_TWO];
      if (_needBtn2 && _needBtn2==true) {
        this._showButtonTwo=true;
      } else this._showButtonTwo=false;

      let _type:string=_opt[MessageDlgComponent.DLG_TYPE];
      if (_type && _type==MessageDlgComponent.DLG_TYPE_HELP) {
        this._isHelpDlg=true;
      } else this._isHelpDlg=false;

      let _btnLbl:string=_opt[MessageDlgComponent.DLG_BUTTON_ONE_LABEL];
      if (_btnLbl) this.buttonOneLabel=_btnLbl; else this.buttonOneLabel='ok';

      _btnLbl=_opt[MessageDlgComponent.DLG_BUTTON_TWO_LABEL];
      if (_btnLbl) this.buttonTwoLabel=_btnLbl; else this.buttonTwoLabel='cancel';

      let _cb:any = _opt[MessageDlgComponent.DLG_BUTTON_ONE_CALLBACK];
      if (_cb && typeof(_cb)=='function') this._buttonOneCallback=_cb; else this._buttonOneCallback=null;

      _cb = _opt[MessageDlgComponent.DLG_BUTTON_TWO_CALLBACK];
      if (_cb && typeof(_cb)=='function') this._buttonTwoCallback=_cb; else this._buttonTwoCallback=null;
    } // end -- if (_opt is valid)
  }

  /* ------------------ */
  /*  implementations   */
  /* ------------------ */
  protected buttonOneClick(_e:Event):void {
    if (this._buttonOneCallback) {
      this._buttonOneCallback();

    } else this.buttonTwoClick(null);
  }
  protected buttonTwoClick(_e:Event):void {
    if (this._buttonTwoCallback) {
      this._buttonTwoCallback();
    } else {
      // cleanup to save memory
      this.titleLabel='';
      this._message='';
      this._showWarning=false;
      this._showButtonTwo=true;

      MessageDlgComponent.hideDlg(this.getDlg(this._element, 'dlgMessage'), this._renderer);
    }
  }




}
