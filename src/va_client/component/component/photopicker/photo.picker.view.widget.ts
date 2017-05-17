import { Component } from '@angular/core';
import { Input } from '@angular/core';

import { CoreModel } from './../../core/coreModel';
import { CoreModelProvider } from './../../core/core.model.provider';
import { PhotoPickerComponent } from './photo.picker.component';

@Component({
  selector: 'photo-picker-view-widget',
  templateUrl: './view/photo.picker.view.widget.html',
  providers: [ CoreModelProvider ]
})
export class PhotoPickerViewWidget  {
  // reference to the parent component
  @Input() _parent:PhotoPickerComponent;
  @Input() _photoDataIndex:number;

  private _photoURIData:string;

  constructor(private _coreModel:CoreModel) {

  }
  /**
   *  lifecycle hook
   *  (Respond after Angular checks the content projected into the component.)
   *  https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
   */
  ngAfterContentChecked() {
    if (!this._photoURIData) {
      this._photoURIData = this._parent.getURIDataFromPhotoDataList(this._photoDataIndex);
    }
  }

  private showPhotBigPreviewDlg(_e:Event) {
    this._parent.displayPhotoBigPreviewDlg(this, this._photoURIData);
  }


}
