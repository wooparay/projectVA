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
var coreModel_1 = require("./../core/coreModel");
var PhotoPickerComponent = (function () {
    function PhotoPickerComponent(_coreModel) {
        this._coreModel = _coreModel;
    }
    return PhotoPickerComponent;
}());
PhotoPickerComponent = __decorate([
    core_1.Component({
        selector: 'photo-picker',
        templateUrl: './view/photo.picker.component.html',
        providers: [coreModel_1.CoreModel]
    }),
    __metadata("design:paramtypes", [coreModel_1.CoreModel])
], PhotoPickerComponent);
exports.PhotoPickerComponent = PhotoPickerComponent;
//# sourceMappingURL=photo.picker.component.js.map