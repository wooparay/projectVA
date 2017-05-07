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
var core_model_provider_1 = require("./../core/core.model.provider");
var photo_picker_component_1 = require("./photo.picker.component");
var PhotoPickerViewWidget = (function () {
    function PhotoPickerViewWidget(_coreModel) {
        this._coreModel = _coreModel;
    }
    /**
     *  lifecycle hook
     *  (Respond after Angular checks the content projected into the component.)
     *  https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
     */
    PhotoPickerViewWidget.prototype.ngAfterContentChecked = function () {
        if (!this._photoURIData) {
            this._photoURIData = this._parent.getURIDataFromPhotoDataList(this._photoDataIndex);
        }
    };
    return PhotoPickerViewWidget;
}());
__decorate([
    core_2.Input(),
    __metadata("design:type", photo_picker_component_1.PhotoPickerComponent)
], PhotoPickerViewWidget.prototype, "_parent", void 0);
__decorate([
    core_2.Input(),
    __metadata("design:type", Number)
], PhotoPickerViewWidget.prototype, "_photoDataIndex", void 0);
PhotoPickerViewWidget = __decorate([
    core_1.Component({
        selector: 'photo-picker-view-widget',
        templateUrl: './view/photo.picker.view.widget.html',
        providers: [core_model_provider_1.CoreModelProvider]
    }),
    __metadata("design:paramtypes", [coreModel_1.CoreModel])
], PhotoPickerViewWidget);
exports.PhotoPickerViewWidget = PhotoPickerViewWidget;
//# sourceMappingURL=photo.picker.view.widget.js.map