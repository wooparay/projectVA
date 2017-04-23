import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';

import { CoreModel } from './../core/coreModel';
import { PhotoPickerPreviewWidget } from './photo.picker.preview.widget';
// ** optional (unless you need to access this component's methods)
import { FileUploadComponent } from './file.upload.component';

@Component({
  selector: 'photo-picker',
  templateUrl: './view/photo.picker.component.html',
  providers: [ CoreModel ]
})
export class PhotoPickerComponent  {

  constructor(private _coreModel:CoreModel,
    private _renderer:Renderer2,
    private _element:ElementRef) {

    console.log(_coreModel.getCreationTimestamp());
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

    FileUploadComponent.showDlgFileUpload(
      this._element.nativeElement.querySelector('#dlgFileUpload'),
      this._renderer);
  }

}

/*
 *  Renderer2 tutorial =>
 *    https://netbasal.com/angular-2-explore-the-renderer-service-e43ef673b26c
 */
