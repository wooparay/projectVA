import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { Input } from '@angular/core';
import { NgIf } from '@angular/common';

import { GenericDlgComponent } from './generic.dlg.component';

//import { PhotoPickerComponent } from './photo.picker.component';
//import { CoreModel } from './../core/coreModel';
//import { CoreModelProvider } from './../core/core.model.provider';

//import { FileReaderService, FileReaderServiceProvider } from './../core/file.reader';

@Component({
  selector: 'photo-big-preview-dlg',
  templateUrl: './view/photo.big.preview.component.html'
  //,providers: [ CoreModelProvider ]
})
export class PhotoBigPreviewComponent extends GenericDlgComponent {

  @Input() _parent:any;

  constructor(private _element:ElementRef,
    private _renderer:Renderer2) {

    super();
    this.titleLabel = 'preview~';
    //this.buttonOneLabel = "Ok";
    //this.buttonTwoLabel = "Cancel";
  }

  /* -------------------------------- */
  /*  abstract method implementations */
  /* -------------------------------- */

  protected buttonOneClick(_e:Event):void {
    // nothing to do in this case
  }
  protected buttonTwoClick(_e:Event):void {
    PhotoBigPreviewComponent.hideDlg(
      this._element.nativeElement.querySelector('#dlgPhotoBigPreview'),
      this._renderer);
  }

  /**
   *  STATIC method to show the dialog
   */
  public static showPhotoBigPreviewDlg(
    _e:any, _imgE:any, _renderer:Renderer2, _dataUri:string) {

    // handle the HTML width too => modal-dialog max-width: 500px;
    _renderer.setAttribute(_imgE, "src", _dataUri, "");

    _renderer.addClass(_e, 'show');
    _renderer.setStyle(_e, 'display', 'block');
  }



}
