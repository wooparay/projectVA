"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var generic_dlg_component_1 = require("./generic.dlg.component");
//import { CoreModel } from './../core/coreModel';
//import { CoreModelProvider } from './../core/core.model.provider';
//import { FileReaderService, FileReaderServiceProvider } from './../core/file.reader';
var PhotoBigPreviewComponent = (function (_super) {
    __extends(PhotoBigPreviewComponent, _super);
    function PhotoBigPreviewComponent() {
        var _this = _super.call(this) || this;
        _this.titleLabel = 'preview';
        return _this;
    }
    //ngAfterContentChecked() {}
    /* -------------------------------- */
    /*  abstract method implementations */
    /* -------------------------------- */
    PhotoBigPreviewComponent.prototype.buttonOneClick = function (_e) {
        console.log(this.buttonOneLabel + ' clicked');
    };
    PhotoBigPreviewComponent.prototype.buttonTwoClick = function (_e) {
        console.log(this.buttonTwoLabel + ' clicked');
    };
    return PhotoBigPreviewComponent;
}(generic_dlg_component_1.GenericDlgComponent));
__decorate([
    core_2.Input(),
    __metadata("design:type", String)
], PhotoBigPreviewComponent.prototype, "_dataUri", void 0);
PhotoBigPreviewComponent = __decorate([
    core_1.Component({
        selector: 'photo-big-preview-dlg',
        templateUrl: './view/photo.big.preview.component.html'
    }),
    __metadata("design:paramtypes", [])
], PhotoBigPreviewComponent);
exports.PhotoBigPreviewComponent = PhotoBigPreviewComponent;
//# sourceMappingURL=photo.big.preview.dialogue.js.map