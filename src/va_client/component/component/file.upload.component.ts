import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { Input } from '@angular/core';
import { NgIf } from '@angular/common';

import { CoreModel } from './../core/coreModel';
import { CoreModelProvider } from './../core/core.model.provider';

//import { PhotoPickerComponent } from './photo.picker.component';
import { FileReaderService, FileReaderServiceProvider } from './../core/file.reader';

@Component({
  selector: 'file-upload',
  templateUrl: './view/file.upload.component.html',
  providers: [ CoreModelProvider, FileReaderServiceProvider ]
})
export class FileUploadComponent {

  @Input() _parent:any;

  public static CMODEL_KEY:string = "FileUploadComponent";

  /*
   *  difference between DLG_TITLE and DLG_INFO_TITLE is that by default,
   *  will use DLG_TITLE, however if "SHOW_INFO_FLAG" is set to true,
   *  will pick DLG_INFO_TITLE if set
   */
  public static DLG_TITLE:string = "DLG_TITLE";
  public static DLG_INFO_TITLE:string = "DLG_INFO_TITLE";
  public static SHOW_INFO_FLAG:string = "SHOW_INFO_FLAG";
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

  private _canShowInfo:boolean = false;

  /**
   *  constructor
   */
  constructor(private _element:ElementRef,
    private _renderer:Renderer2,
    private _coreModel:CoreModel,
    private _fileReaderService:FileReaderService) {
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
      // show which Title...
      if (_options.hasOwnProperty(FileUploadComponent.SHOW_INFO_FLAG)) {
        let _flag:boolean = _options[FileUploadComponent.SHOW_INFO_FLAG];
        if (_flag == true) {
          if (_options.hasOwnProperty(FileUploadComponent.DLG_INFO_TITLE)) {
            this._lblTitle = _options[FileUploadComponent.DLG_INFO_TITLE];
          } else if (_options.hasOwnProperty(FileUploadComponent.DLG_TITLE)) {
            this._lblTitle = _options[FileUploadComponent.DLG_TITLE];
          }
          this._canShowInfo = true;
        } else {
          if (_options.hasOwnProperty(FileUploadComponent.DLG_TITLE)) {
            this._lblTitle = _options[FileUploadComponent.DLG_TITLE];
          } else {
            this._lblTitle = 'Select';
          }
          this._canShowInfo = false;
        }
      }
      // any special labels for the button(s)
      if (_options.hasOwnProperty(FileUploadComponent.DLG_BTN_ONE_LABEL)) {
        this._lblBtnOne = _options[FileUploadComponent.DLG_BTN_ONE_LABEL];
      }
      if (_options.hasOwnProperty(FileUploadComponent.DLG_BTN_TWO_LABEL)) {
        this._lblBtnTwo = _options[FileUploadComponent.DLG_BTN_TWO_LABEL];
      }
    } // end -- if (_options)

    // handle the Form's drag n drop feature
    this._setFormDragNDrop(this);
  }

  private _setFormDragNDrop(_ref:FileUploadComponent) {
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
        if (_e && _e['dataTransfer'].files) {
          let _file:any = _e['dataTransfer'].files[0];

          if (_file.type.match(/image.*/)) {
            // added _callback => close the dialogue
            _ref._fileReaderService.readAsDataURL(_file, _ref._parent, function() { _ref.cancel(null); });

          } else {
            let _options:any = _ref._coreModel.getDataByKey(FileUploadComponent.CMODEL_KEY);
            if (!_options) {
              _options = {};
            }
            _options[FileUploadComponent.SHOW_INFO_FLAG]=true;
            _options[FileUploadComponent.DLG_INFO_TITLE] = 'Select: the selected file is not an image type!';
            _ref._coreModel.setDataByKey(FileUploadComponent.CMODEL_KEY, _options, true);
          } // end -- if (image/*) type
        }
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
    // reset the SHOW_INFO_FLAG flag to false
    this._resetShowInfoFlag();
  }
  private select(_event:MouseEvent) {
    // trigger the "file" input to click
    this._getFilUpload().click();
  }
  private fileUpdated(_event:Event) {
    let _file:any = _event.target['files'][0];
    let _ref:FileUploadComponent = this;

    if (_file) {
      if (_file.type.match(/image.*/)) {
        // added _callback => close the dialogue
        this._fileReaderService.readAsDataURL(_file, this._parent,
          function() {
            _ref.cancel(null);
          });

      } else {
        let _options:any = this._coreModel.getDataByKey(FileUploadComponent.CMODEL_KEY);
        if (!_options) {
          _options = {};
        }
        _options[FileUploadComponent.SHOW_INFO_FLAG]=true;
        _options[FileUploadComponent.DLG_INFO_TITLE] = 'Select: the selected file is not an image type!';
        this._coreModel.setDataByKey(FileUploadComponent.CMODEL_KEY, _options, true);
        // not sure if it works
        _event.target['form'].reset();
      }
    } // end -- if (_file) could be null if "cancelled"
  }

  private _resetShowInfoFlag() {
    let _options:any = this._coreModel.getDataByKey(FileUploadComponent.CMODEL_KEY);
    if (!_options) {
      _options = {};
    }
    _options[FileUploadComponent.SHOW_INFO_FLAG]=false;
    _options[FileUploadComponent.DLG_INFO_TITLE] = '';
    this._coreModel.setDataByKey(FileUploadComponent.CMODEL_KEY, _options, true);
  }

}

/* ****************
 *  dependency(s)
 *
 *  _parent => embedding parent (could be anything => now is hard-code as PhotoPickerComponent)
 *  _renderer2 => Renderer2 (for html DOM manipulation)
 *  _coreModel => CoreModel (act as a sharable storage for values across objects)
 * ****************/
