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
var core_3 = require("@angular/core");
var core_4 = require("@angular/core");
var generic_dlg_component_1 = require("./generic.dlg.component");
//import { PhotoPickerComponent } from './photo.picker.component';
//import { CoreModel } from './../core/coreModel';
//import { CoreModelProvider } from './../core/core.model.provider';
//import { FileReaderService, FileReaderServiceProvider } from './../core/file.reader';
var PhotoBigPreviewComponent = PhotoBigPreviewComponent_1 = (function (_super) {
    __extends(PhotoBigPreviewComponent, _super);
    function PhotoBigPreviewComponent(_element, _renderer) {
        var _this = _super.call(this) || this;
        _this._element = _element;
        _this._renderer = _renderer;
        _this.titleLabel = 'preview';
        _this.buttonOneLabel = "Ok";
        _this.buttonTwoLabel = "Cancel";
        return _this;
    }
    /* -------------------------------- */
    /*  abstract method implementations */
    /* -------------------------------- */
    PhotoBigPreviewComponent.prototype.buttonOneClick = function (_e) {
        console.log(this.buttonOneLabel + ' clicked');
    };
    PhotoBigPreviewComponent.prototype.buttonTwoClick = function (_e) {
        PhotoBigPreviewComponent_1.hideDlg(this._element.nativeElement.querySelector('#dlgPhotoBigPreview'), this._renderer);
    };
    /**
     *  STATIC method to show the dialog
     */
    PhotoBigPreviewComponent.showPhotoBigPreviewDlg = function (_e, _imgE, _renderer, _dataUri) {
        // TODO -> handle the HTML width too => modal-dialog max-width: 500px;
        _renderer.setAttribute(_imgE, "src", _dataUri, "");
        _renderer.addClass(_e, 'show');
        _renderer.setStyle(_e, 'display', 'block');
    };
    return PhotoBigPreviewComponent;
}(generic_dlg_component_1.GenericDlgComponent));
__decorate([
    core_4.Input(),
    __metadata("design:type", Object)
], PhotoBigPreviewComponent.prototype, "_parent", void 0);
PhotoBigPreviewComponent = PhotoBigPreviewComponent_1 = __decorate([
    core_1.Component({
        selector: 'photo-big-preview-dlg',
        templateUrl: './view/photo.big.preview.component.html'
    }),
    __metadata("design:paramtypes", [core_2.ElementRef,
        core_3.Renderer2])
], PhotoBigPreviewComponent);
exports.PhotoBigPreviewComponent = PhotoBigPreviewComponent;
var PhotoBigPreviewComponent_1;
//# sourceMappingURL=photo.big.preview.dialogue.js.map