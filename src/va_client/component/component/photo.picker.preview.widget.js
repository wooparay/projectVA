"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var coreModel_1 = require("./../core/coreModel");
var photo_picker_component_1 = require("./photo.picker.component");
var PhotoPickerPreviewWidget = (function () {
    function PhotoPickerPreviewWidget(_coreModel) {
        this._coreModel = _coreModel;
        console.log(_coreModel.getCreationTimestamp());
    }
    PhotoPickerPreviewWidget.prototype.displayUploadDlg = function () {
        this._ref.displayUploadDlg(this);
    };
    return PhotoPickerPreviewWidget;
}());
__decorate([
    core_2.Input(),
    __metadata("design:type", photo_picker_component_1.PhotoPickerComponent)
], PhotoPickerPreviewWidget.prototype, "_ref", void 0);
PhotoPickerPreviewWidget = __decorate([
    core_1.Component({
        selector: 'photo-picker-preview-widget',
        templateUrl: './view/photo.picker.preview.widget.html',
        providers: [coreModel_1.CoreModel]
    }),
    __metadata("design:paramtypes", [coreModel_1.CoreModel])
], PhotoPickerPreviewWidget);
exports.PhotoPickerPreviewWidget = PhotoPickerPreviewWidget;
//# sourceMappingURL=photo.picker.preview.widget.js.map