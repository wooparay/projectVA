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
var generic_dlg_component_1 = require("./../dialog/generic.dlg.component");
var PhotoBigPreviewComponent = PhotoBigPreviewComponent_1 = (function (_super) {
    __extends(PhotoBigPreviewComponent, _super);
    function PhotoBigPreviewComponent(_element, _renderer) {
        var _this = _super.call(this) || this;
        _this._element = _element;
        _this._renderer = _renderer;
        _this.titleLabel = 'preview~';
        return _this;
    }
    /* -------------------------------- */
    /*  abstract method implementations */
    /* -------------------------------- */
    PhotoBigPreviewComponent.prototype.buttonOneClick = function (_e) {
        // nothing to do in this case
    };
    PhotoBigPreviewComponent.prototype.buttonTwoClick = function (_e) {
        // reset flags etc
        this._resetFlags();
        PhotoBigPreviewComponent_1.hideDlg(this._element.nativeElement.querySelector('#dlgPhotoBigPreview'), this._renderer);
    };
    PhotoBigPreviewComponent.prototype._getImgElement = function () {
        if (!this._imgElement) {
            this._imgElement = this._element.nativeElement.querySelector('#imgContent');
        }
        return this._imgElement;
    };
    /**
     *  clean up on the flag(s) and data for this dialogue
     */
    PhotoBigPreviewComponent.prototype._resetFlags = function () {
        var _iE = this._getImgElement();
        if (_iE) {
            this._renderer.setAttribute(_iE, "src", "", null);
        }
    };
    /**
     *  STATIC method to show the dialog
     */
    PhotoBigPreviewComponent.showPhotoBigPreviewDlg = function (_e, _imgE, _renderer, _dataUri) {
        // handle the HTML width too => modal-dialog max-width: 500px;
        _renderer.setAttribute(_imgE, "src", _dataUri, "");
        _renderer.addClass(_e, 'show');
        _renderer.setStyle(_e, 'display', 'block');
    };
    return PhotoBigPreviewComponent;
}(generic_dlg_component_1.GenericDlgComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PhotoBigPreviewComponent.prototype, "_parent", void 0);
PhotoBigPreviewComponent = PhotoBigPreviewComponent_1 = __decorate([
    core_1.Component({
        selector: 'photo-big-preview-dlg',
        templateUrl: './view/photo.big.preview.component.html'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.Renderer2])
], PhotoBigPreviewComponent);
exports.PhotoBigPreviewComponent = PhotoBigPreviewComponent;
var PhotoBigPreviewComponent_1;
//# sourceMappingURL=photo.big.preview.dialogue.js.map