"use strict";
var http_1 = require("@angular/http");
var i_photo_picker_set_service_1 = require("./../component/photopicker/i.photo.picker.set.service");
var mock_photo_picker_set_service_1 = require("./mock.photo.picker.set.service");
var PhotoPickerSetServiceFactory = function (_http) {
    console.log('inside the factory');
    console.log(_http);
    // return the correct implementation base on the aioConfig
    return new mock_photo_picker_set_service_1.MockPhotoPickerSetService(_http);
};
exports.PhotoPickerSetServiceProvider = {
    provide: i_photo_picker_set_service_1.AbstractPhotoPickerSetService,
    useFactory: PhotoPickerSetServiceFactory,
    deps: [http_1.Http]
};
//# sourceMappingURL=photo.picker.set.service.factory.js.map