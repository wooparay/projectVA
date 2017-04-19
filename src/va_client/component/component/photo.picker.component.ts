import { Component } from '@angular/core';
import { CoreModel } from './../core/coreModel';

@Component({
  selector: 'photo-picker',
  templateUrl: './view/photo.picker.component.html',
  providers: [ CoreModel ]
})
export class PhotoPickerComponent  {

  constructor(private _coreModel:CoreModel) {
    
  }
}
