
import { IPhotoPickerSetService,
  AbstractPhotoPickerSetService,
  PhotoPickerSetServiceRequest,
  PhotoPickerSetServiceResponse }
  from './../component/photopicker/i.photo.picker.set.service';

import { Http, RequestOptions } from '@angular/http';

export class MockPhotoPickerSetService extends AbstractPhotoPickerSetService {

  constructor(private _http:Http) {
    super();
    console.log('ctor => MockPhotoPickerSetService');
    console.log(this._http);
  };

  public getAvailablePhotoSets(
    _request:PhotoPickerSetServiceRequest,
    _additionalParams:any):any {

    console.log('inside Mock service');
    
    return [  ];
  }

}
