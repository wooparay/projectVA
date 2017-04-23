import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';

import { CoreModel } from './../core/coreModel';

@Component({
  selector: 'file-upload',
  templateUrl: './view/file.upload.component.html',
  providers: [ CoreModel ]
})
export class FileUploadComponent {
  private _isTainted:boolean = false;
  private _dlgFileUpload:any = null;
  private _filUpload:any = null;

  /**
   *  constructor
   */
  constructor(private _element:ElementRef, private _renderer:Renderer2) {

  }

  /**
   *  return the (native) element value of #dlgFileUpload
   */
  private _getDlgFileUpload() {
    if (this._dlgFileUpload == null) {
      this._dlgFileUpload = this._element.nativeElement.querySelector('#dlgFileUpload');
    }
    return this._dlgFileUpload;
  }
  private _getFilUpload() {
    if (this._filUpload == null) {
      this._filUpload = this._element.nativeElement.querySelector('#filUpload');
    }
    return this._filUpload;
  }

  /**
   *  STATIC method to show the dlgFileUpload
   */
  public static showDlgFileUpload(_e:any, _renderer:Renderer2) {
    _renderer.addClass(_e, 'show');
    _renderer.setStyle(_e, 'display', 'block');
  }

  /* -------------- */
  /* -------------- */
  /*  event handler */
  /* -------------- */
  /* -------------- */

  private cancel(_event:MouseEvent) {
    if (this._isTainted) {
alert('tainted');
    } else {
      this._renderer.removeClass(this._getDlgFileUpload(), 'show');
      this._renderer.setStyle(this._getDlgFileUpload(), 'display', "none");
    }
  }
  private select(_event:MouseEvent) {
    // trigger the "file" input to click
    this._getFilUpload().click();
  }
  private fileUpdated(_event:Event) {
    console.log(_event);
  }

}
