import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';

export abstract class GenericDlgComponent {

  private _titleLabel:string;
  private _lblBtnOne:string;
  private _lblBtnTwo:string;

  private _form:any;
  private _dlg:any;

  /* ------------------ */
  /*  abstract methods  */
  /* ------------------ */

  protected abstract buttonOneClick(_e:Event):void;
  protected abstract buttonTwoClick(_e:Event):void;

  /* ------------------ */
  /*  getter / setter   */
  /* ------------------ */

  get titleLabel():string { return this._titleLabel; }
  set titleLabel(_lbl:string) {
    if (_lbl) this._titleLabel = _lbl;
  }

  get buttonOneLabel():string { return this._lblBtnOne; }
  set buttonOneLabel(_lbl:string) {
    if (_lbl) this._lblBtnOne = _lbl;
  }

  get buttonTwoLabel():string { return this._lblBtnTwo; }
  set buttonTwoLabel(_lbl:string) {
    if (_lbl) this._lblBtnTwo = _lbl;
  }

  /* -------------- */
  /*  util methods  */
  /* -------------- */

  /**
   *  return the html form
   */
  public getForm(_element:ElementRef) {
    if (this._form==null) {
      this._form = _element.nativeElement.querySelector('form');
    }
    return this._form;
  }
  /**
   *  return the html div representing the dialog
   */
  public getDlg(_element:ElementRef, _id:string) {
    if (this._dlg == null) {
      this._dlg = _element.nativeElement.querySelector('#'+_id);
    }
    return this._dlg;
  }

  /**
   *  STATIC method to show the dialog
   */
  public static showDlg(_e:any, _renderer:Renderer2) {
    _renderer.addClass(_e, 'show');
    _renderer.setStyle(_e, 'display', 'block');
  }
  /**
   *  STATIC method to hide the dialog
   */
  public static hideDlg(_e:any, _renderer:Renderer2) {
    _renderer.removeClass(_e, 'show');
    _renderer.setStyle(_e, 'display', "none");
  }


}
