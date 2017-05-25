
/**
 *  interface: related to PhotoPicker Set operations like save set, load set,
 *  delete set etc
 */
export interface IPhotoPickerSetService {
  /**
   *  method to clean up the data set inside
   *    the CoreModel (sort of cleaning up); this method
   *    could be handy when you need to free up memory with
   *    non-used data
   */
  getAvailablePhotoSets(
    _request:PhotoPickerSetServiceRequest,
    _additionalParams:any):any;

}

/**
 *  treate it as Request or Param object for the service
 */
export class PhotoPickerSetServiceRequest {
  public static SORT_BY_LAST_UPDATE:string='lastUpdate';
  public static SORT_BY_SET_ID:string='id';
  public static SORT_BY_SET_NAME:string='name';

  // no. of set(s) to be returned (100)
  public size:number=100;
  // for pagination purpose
  public offset:number=0;
  // sort the set results based on which field (default is 'lastUpdate')
  public sortBy:string=PhotoPickerSetServiceRequest.SORT_BY_LAST_UPDATE;
  /*
   *  return a "cloned" data set instead of the original;
   *  so now you won't be contaminating the original data set by mistake
   */
  public isClone:boolean=true;
}

/**
 *  treat it as Response for the service request
 */
export class PhotoPickerSetServiceResponse {
  // example set item (beta 1.0)
  /*{
    'id': '001',
    "name": "bikini set 01",
    "checked": false,
    "photo.list": [
      'http://modelisto.com/photo/tara-booher-model-123835.jpg',
      'http://static.face.nextmedia.com/images/next-photos/face/235/640pixfolder/W1035_307__DSC6389.jpg'
    ]
  }*/

  // array of hits -> contents are { 'key': 'value' }
  public hits:any=[];
  // total no. of hits (usually just check hits.length will do)
  public total:number=0;
  // if the operation is successful or not (zero hits could be error or just really no results)
  public isSuccess:boolean=true;

}
