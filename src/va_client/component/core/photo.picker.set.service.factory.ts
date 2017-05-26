import { Http, RequestOptions } from '@angular/http';

import { IPhotoPickerSetService,
  AbstractPhotoPickerSetService }
  from './../component/photopicker/i.photo.picker.set.service';
import { MockPhotoPickerSetService } from './mock.photo.picker.set.service';


let PhotoPickerSetServiceFactory = function(_http:Http) {
console.log('inside the factory');  
console.log(_http);

  // return the correct implementation base on the aioConfig
  return new MockPhotoPickerSetService(_http);
};

export let PhotoPickerSetServiceProvider = {
  provide: AbstractPhotoPickerSetService,
  useFactory: PhotoPickerSetServiceFactory,
  deps: [ Http ]
};
