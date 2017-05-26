"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var i_photo_picker_set_service_1 = require("./../component/photopicker/i.photo.picker.set.service");
var MockPhotoPickerSetService = (function (_super) {
    __extends(MockPhotoPickerSetService, _super);
    function MockPhotoPickerSetService(_http) {
        var _this = _super.call(this) || this;
        _this._http = _http;
        console.log('ctor => MockPhotoPickerSetService');
        console.log(_this._http);
        return _this;
    }
    ;
    MockPhotoPickerSetService.prototype.getAvailablePhotoSets = function (_request, _additionalParams) {
        console.log('inside Mock service');
        return [];
    };
    return MockPhotoPickerSetService;
}(i_photo_picker_set_service_1.AbstractPhotoPickerSetService));
exports.MockPhotoPickerSetService = MockPhotoPickerSetService;
//# sourceMappingURL=mock.photo.picker.set.service.js.map