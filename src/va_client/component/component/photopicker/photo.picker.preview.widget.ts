import { Component } from '@angular/core';
import { Input } from '@angular/core';

import { CoreModel } from './../../core/coreModel';
import { CoreModelProvider } from './../../core/core.model.provider';
import { PhotoPickerComponent } from './photo.picker.component';

@Component({
  selector: 'photo-picker-preview-widget',
  templateUrl: './view/photo.picker.preview.widget.html',
  providers: [ CoreModelProvider ]
})
export class PhotoPickerPreviewWidget  {
  // reference to the parent component
  @Input() _ref:PhotoPickerComponent;

  // testing, setting some debug msg
  private _dbg:any;

  constructor(private _coreModel:CoreModel) {
    console.log(_coreModel.getCreationTimestamp());
  }

  private displayUploadDlg() {
    this._ref.displayUploadDlg(this);
  }

}
