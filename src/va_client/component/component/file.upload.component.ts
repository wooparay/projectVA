import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';

import { CoreModel } from './../core/coreModel';
import { CoreModelProvider } from './../core/core.model.provider';

@Component({
  selector: 'file-upload',
  templateUrl: './view/file.upload.component.html',
  providers: [ CoreModelProvider ]
})
export class FileUploadComponent {

  public static CMODEL_KEY:string = "FileUploadComponent";

  public static DLG_TITLE:string = "DLG_TITLE";
  public static DLG_BTN_ONE_LABEL:string = "DLG_BTN_ONE_LABEL";
  public static DLG_BTN_TWO_LABEL:string = "DLG_BTN_TWO_LABEL";

  private _isTainted:boolean = false;
  private _dlgFileUpload:any = null;
  private _filUpload:any = null;
  private _form:any = null;

  private _isFormDragNDropSet:boolean = false;

  // value bound properties
  private _lblTitle:string = 'Select';
  private _lblBtnOne:string = 'Select';
  private _lblBtnTwo:string = 'Cancel';

  /**
   *  constructor
   */
  constructor(private _element:ElementRef,
    private _renderer:Renderer2,
    private _coreModel:CoreModel) {
  }

  /**
   *  lifecycle hook
   *  (Respond after Angular checks the content projected into the component.)
   *  https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
   */
  ngAfterContentChecked() {
    // check CoreModel contents and apply changes to the label(s) when necessary
    let _options:any = this._coreModel.getDataByKey(FileUploadComponent.CMODEL_KEY);
    if (_options) {
      if (_options.hasOwnProperty(FileUploadComponent.DLG_TITLE)) {
        this._lblTitle = _options[FileUploadComponent.DLG_TITLE];
      }
      if (_options.hasOwnProperty(FileUploadComponent.DLG_BTN_ONE_LABEL)) {
        this._lblBtnOne = _options[FileUploadComponent.DLG_BTN_ONE_LABEL];
      }
      if (_options.hasOwnProperty(FileUploadComponent.DLG_BTN_TWO_LABEL)) {
        this._lblBtnTwo = _options[FileUploadComponent.DLG_BTN_TWO_LABEL];
      }
    } // end -- if (_options)

    // handle the Form's drag n drop feature
    this._setFormDragNDrop();
  }

  private _setFormDragNDrop() {
    if (this._isFormDragNDropSet == false) {
      let _frm:any = this._getForm();
      let _fxStopEvent = function() {
        let _e:Event = arguments[0];
        _e.preventDefault();
        _e.stopPropagation();
        console.log('# inside event');
      };
      let _fxDropEvent = function() {
        let _e:Event = arguments[0];
        _e.preventDefault();
        _e.stopPropagation();

        if (!_e.hasOwnProperty('dataTransfer')) {
          if (_e.hasOwnProperty('originalEvent')) {
            _e = _e['originalEvent'];
          }
        }
        if (_e) {
          console.log(_e['dataTransfer'].files);  
        }

        console.log('# inside drop event');
      };

      this._renderer.setProperty(_frm, "ondrag", _fxStopEvent);
      this._renderer.setProperty(_frm, "ondragstart", _fxStopEvent);
      this._renderer.setProperty(_frm, "ondragend", _fxStopEvent);
      this._renderer.setProperty(_frm, "ondragover", _fxStopEvent);
      this._renderer.setProperty(_frm, "ondragenter", _fxStopEvent);
      this._renderer.setProperty(_frm, "ondragleave", _fxStopEvent);
      this._renderer.setProperty(_frm, "ondrop", _fxDropEvent);

      this._isFormDragNDropSet = true;
    }
  }

  private _getForm() {
    if (this._form==null) {
      this._form = this._element.nativeElement.querySelector('form');
    }
    return this._form;
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
