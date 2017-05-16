import { NgFor } from '@angular/common';

import { Component, ElementRef, Renderer2 } from '@angular/core';

import { CoreModel } from './../core/coreModel';
import { CoreModelProvider } from './../core/core.model.provider';
import { PhotoPickerPreviewWidget } from './photo.picker.preview.widget';
import { PhotoPickerViewWidget } from './photo.picker.view.widget';

import { FileUploadComponent } from './file.upload.component';
import { PhotoBigPreviewComponent } from './photo.big.preview.dialogue';

import { ICoreModelLifeCycle } from './../interface/i.core.model.lifecycle';

//import { AIOConfigService, AIOConfigServiceProvider } from './../core/aio.config';
import { AIOConfigService } from './../core/aio.config';

@Component({
  selector: 'photo-picker',
  templateUrl: './view/photo.picker.component.html',
  /* ** CONCEPT => provider creates CoreModel, hence you are
   *    injecting CoreModel not CoreModelProvider
   * **
   */
  providers: [ CoreModelProvider, AIOConfigService ]
})
export class PhotoPickerComponent implements ICoreModelLifeCycle {

  // List of URI_data for the photos involved
  private _photoDataList:string[] = [];
  // the Configuration data related to photo.picker.component (e.g. backend endpoints)
  private _configs:any = null;

  constructor(private _coreModel:CoreModel,
    private _aioConfig:AIOConfigService,
    private _renderer:Renderer2,
    private _element:ElementRef) {
  }
  ngOnDestroy() {
    this.cleanupDataBasedOnKey(FileUploadComponent.CMODEL_KEY);
console.log('*** to be destroyed => PhotoPickerComponent, remove the key on CoreModel');
  }

  /**
   *  method to return the Configuration related to
   *  "photo.picker.component"
   */
  private _getConfigs() {
    if (!this._configs) {
      this._configs = this._aioConfig.getConfigsByKey("photo.picker.component");
    }
    return this._configs;
  }

  /* -------------------------- */
  /*  interface implementations */
  /* -------------------------- */

  public cleanupDataBasedOnKey(_key:string):any {
    this._coreModel.removeDataByKey(_key);
  }


  /**
   *  method to return the uri data based on the given index
   */
  public getURIDataFromPhotoDataList(_index:number):string {
    if (_index < this._photoDataList.length) {
      return this._photoDataList[_index];
    } else {
      return null;
    }
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

    //FileUploadComponent.showDlgFileUpload(
    FileUploadComponent.showDlg(
      this._element.nativeElement.querySelector('#dlgFileUpload'),
      this._renderer);
  }

  public displayPhotoBigPreviewDlg(_ref:any, _dataUri:string) {
    PhotoBigPreviewComponent.showPhotoBigPreviewDlg(
      this._element.nativeElement.querySelector('#dlgPhotoBigPreview'),
      this._element.nativeElement.querySelector('#imgContent'),
      this._renderer,
      _dataUri);
  }


  public addDataToPhotoDataList(_data:string) {
    this._photoDataList.push(_data);
    //console.log('** size of the photoDataList > '+this._photoDataList.length);
  }

}

/*
 *  Renderer2 tutorial =>
 *    https://netbasal.com/angular-2-explore-the-renderer-service-e43ef673b26c
 */

 /*import {
   View,
   CORE_DIRECTIVES,
   FORM_DIRECTIVES
 } from '@angular/core';*/
