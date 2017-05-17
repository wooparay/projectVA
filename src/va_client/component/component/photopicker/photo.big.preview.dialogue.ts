import { Component, ElementRef, Renderer2, Input } from '@angular/core';
import { NgIf } from '@angular/common';

import { GenericDlgComponent } from './../dialog/generic.dlg.component';

@Component({
  selector: 'photo-big-preview-dlg',
  templateUrl: './view/photo.big.preview.component.html'
})
export class PhotoBigPreviewComponent extends GenericDlgComponent {

  @Input() _parent:any;

  private _imgElement:any;

  constructor(private _element:ElementRef,
    private _renderer:Renderer2) {

    super();
    this.titleLabel = 'preview~';
  }

  /* -------------------------------- */
  /*  abstract method implementations */
  /* -------------------------------- */

  protected buttonOneClick(_e:Event):void {
    // nothing to do in this case
  }
  protected buttonTwoClick(_e:Event):void {
    // reset flags etc
    this._resetFlags();

    PhotoBigPreviewComponent.hideDlg(
      this._element.nativeElement.querySelector('#dlgPhotoBigPreview'),
      this._renderer);
  }


  private _getImgElement() {
    if (!this._imgElement) {
      this._imgElement=this._element.nativeElement.querySelector('#imgContent');
    }
    return this._imgElement;
  }
  /**
   *  clean up on the flag(s) and data for this dialogue
   */
  private _resetFlags() {
    let _iE:any=this._getImgElement();
    if (_iE) {
      this._renderer.setAttribute(_iE, "src", "", null);
    }
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
