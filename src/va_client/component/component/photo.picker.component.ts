/*import {
  View,
  CORE_DIRECTIVES,
  FORM_DIRECTIVES
} from '@angular/core';*/

import {NgFor} from '@angular/common';

import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';

import { CoreModel } from './../core/coreModel';
import { CoreModelProvider } from './../core/core.model.provider';
import { PhotoPickerPreviewWidget } from './photo.picker.preview.widget';
// ** optional (unless you need to access this component's methods)
import { FileUploadComponent } from './file.upload.component';

@Component({
  selector: 'photo-picker',
  templateUrl: './view/photo.picker.component.html',
  /* ** CONCEPT => provider creates CoreModel, hence you are
   *    injecting CoreModel not CoreModelProvider
   * **
   */
  providers: [ CoreModelProvider ]
})
export class PhotoPickerComponent  {

  private _photoDataList:string[] = [];

  constructor(private _coreModel:CoreModel,
    private _renderer:Renderer2,
    private _element:ElementRef) {
  }

  /* ################################################################## */
  /*  methods for handling singleton level resources like common dialog */
  /* ################################################################## */

  public displayUploadDlg(_ref:any) {
    //console.log('** inside parent(PhotoPickerComponent) displayUploadDlg');
    //_ref._dbg = new Date();
    //console.log(_ref._dbg);

    // ** example on Renderer2 to manipulate the DOM
    /*let _widgetContainer:any = this._renderer.selectRootElement('a i.fa-close');
    console.log(_widgetContainer);
    this._renderer.removeChild(_widgetContainer);*/

    // ** example on how ElementRef could manipulate the DOM
    /*console.log(this._element.nativeElement);
    console.log(this._element.nativeElement.querySelector('file-upload span').innerHTML='yo man');*/


    /*
    // could not recognize FileUploadComponent.XXX within the {} (scope problem)
    let _options:any = {};
    _options[FileUploadComponent.DLG_TITLE] = "Select an image file";
    _options[FileUploadComponent.DLG_BTN_ONE_LABEL] = "ok";
    _options[FileUploadComponent.DLG_BTN_TWO_LABEL] = "no, thx";

    // typically a good idea to check if any errors occured in setting the data
    let _ret:any = this._coreModel.setDataByKey(FileUploadComponent.CMODEL_KEY, _options, false);
    */

    FileUploadComponent.showDlgFileUpload(
      this._element.nativeElement.querySelector('#dlgFileUpload'),
      this._renderer);
  }

  public addDataToPhotoDataList(_data:string) {
    this._photoDataList.push(_data);
    console.log('** size of the photoDataList > '+this._photoDataList.length);
  }

}

/*
 *  Renderer2 tutorial =>
 *    https://netbasal.com/angular-2-explore-the-renderer-service-e43ef673b26c
 */
