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
var core_3 = require("@angular/core");
var coreModel_1 = require("./../core/coreModel");
var FileUploadComponent = (function () {
    /**
     *  constructor
     */
    function FileUploadComponent(_element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this._isTainted = false;
        this._dlgFileUpload = null;
        this._filUpload = null;
    }
    /**
     *  return the (native) element value of #dlgFileUpload
     */
    FileUploadComponent.prototype._getDlgFileUpload = function () {
        if (this._dlgFileUpload == null) {
            this._dlgFileUpload = this._element.nativeElement.querySelector('#dlgFileUpload');
        }
        return this._dlgFileUpload;
    };
    FileUploadComponent.prototype._getFilUpload = function () {
        if (this._filUpload == null) {
            this._filUpload = this._element.nativeElement.querySelector('#filUpload');
        }
        return this._filUpload;
    };
    /**
     *  STATIC method to show the dlgFileUpload
     */
    FileUploadComponent.showDlgFileUpload = function (_e, _renderer) {
        _renderer.addClass(_e, 'show');
        _renderer.setStyle(_e, 'display', 'block');
    };
    /* -------------- */
    /* -------------- */
    /*  event handler */
    /* -------------- */
    /* -------------- */
    FileUploadComponent.prototype.cancel = function (_event) {
        if (this._isTainted) {
            alert('tainted');
        }
        else {
            this._renderer.removeClass(this._getDlgFileUpload(), 'show');
            this._renderer.setStyle(this._getDlgFileUpload(), 'display', "none");
        }
    };
    FileUploadComponent.prototype.select = function (_event) {
        // trigger the "file" input to click
        this._getFilUpload().click();
    };
    FileUploadComponent.prototype.fileUpdated = function (_event) {
        console.log(_event);
    };
    return FileUploadComponent;
}());
FileUploadComponent = __decorate([
    core_1.Component({
        selector: 'file-upload',
        templateUrl: './view/file.upload.component.html',
        providers: [coreModel_1.CoreModel]
    }),
    __metadata("design:paramtypes", [core_2.ElementRef, core_3.Renderer2])
], FileUploadComponent);
exports.FileUploadComponent = FileUploadComponent;
//# sourceMappingURL=file.upload.component.js.map