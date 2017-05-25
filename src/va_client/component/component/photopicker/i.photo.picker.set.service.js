"use strict";
/**
 *  treate it as Request or Param object for the service
 */
var PhotoPickerSetServiceRequest = (function () {
    function PhotoPickerSetServiceRequest() {
        // no. of set(s) to be returned (100)
        this.size = 100;
        // for pagination purpose
        this.offset = 0;
        // sort the set results based on which field (default is 'lastUpdate')
        this.sortBy = PhotoPickerSetServiceRequest.SORT_BY_LAST_UPDATE;
        /*
         *  return a "cloned" data set instead of the original;
         *  so now you won't be contaminating the original data set by mistake
         */
        this.isClone = true;
    }
    return PhotoPickerSetServiceRequest;
}());
PhotoPickerSetServiceRequest.SORT_BY_LAST_UPDATE = 'lastUpdate';
PhotoPickerSetServiceRequest.SORT_BY_SET_ID = 'id';
PhotoPickerSetServiceRequest.SORT_BY_SET_NAME = 'name';
exports.PhotoPickerSetServiceRequest = PhotoPickerSetServiceRequest;
/**
 *  treat it as Response for the service request
 */
var PhotoPickerSetServiceResponse = (function () {
    function PhotoPickerSetServiceResponse() {
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
        this.hits = [];
        // total no. of hits (usually just check hits.length will do)
        this.total = 0;
        // if the operation is successful or not (zero hits could be error or just really no results)
        this.isSuccess = true;
    }
    return PhotoPickerSetServiceResponse;
}());
exports.PhotoPickerSetServiceResponse = PhotoPickerSetServiceResponse;
//# sourceMappingURL=i.photo.picker.set.service.js.map