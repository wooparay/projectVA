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
var core_4 = require("@angular/core");
var coreModel_1 = require("./../core/coreModel");
var core_model_provider_1 = require("./../core/core.model.provider");
var photo_picker_component_1 = require("./photo.picker.component");
var file_reader_1 = require("./../core/file.reader");
var FileUploadComponent = FileUploadComponent_1 = (function () {
    /**
     *  constructor
     */
    function FileUploadComponent(_element, _renderer, _coreModel, _fileReaderService) {
        this._element = _element;
        this._renderer = _renderer;
        this._coreModel = _coreModel;
        this._fileReaderService = _fileReaderService;
        this._isTainted = false;
        this._dlgFileUpload = null;
        this._filUpload = null;
        this._form = null;
        this._isFormDragNDropSet = false;
        // value bound properties
        this._lblTitle = 'Select';
        this._lblBtnOne = 'Select';
        this._lblBtnTwo = 'Cancel';
    }
    /**
     *  lifecycle hook
     *  (Respond after Angular checks the content projected into the component.)
     *  https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
     */
    FileUploadComponent.prototype.ngAfterContentChecked = function () {
        // check CoreModel contents and apply changes to the label(s) when necessary
        var _options = this._coreModel.getDataByKey(FileUploadComponent_1.CMODEL_KEY);
        if (_options) {
            if (_options.hasOwnProperty(FileUploadComponent_1.DLG_TITLE)) {
                this._lblTitle = _options[FileUploadComponent_1.DLG_TITLE];
            }
            if (_options.hasOwnProperty(FileUploadComponent_1.DLG_BTN_ONE_LABEL)) {
                this._lblBtnOne = _options[FileUploadComponent_1.DLG_BTN_ONE_LABEL];
            }
            if (_options.hasOwnProperty(FileUploadComponent_1.DLG_BTN_TWO_LABEL)) {
                this._lblBtnTwo = _options[FileUploadComponent_1.DLG_BTN_TWO_LABEL];
            }
        } // end -- if (_options)
        // handle the Form's drag n drop feature
        this._setFormDragNDrop(this);
    };
    FileUploadComponent.prototype._setFormDragNDrop = function (_ref) {
        if (this._isFormDragNDropSet == false) {
            var _frm = this._getForm();
            var _fxStopEvent = function () {
                var _e = arguments[0];
                _e.preventDefault();
                _e.stopPropagation();
                console.log('# inside event');
            };
            var _fxDropEvent = function () {
                var _e = arguments[0];
                _e.preventDefault();
                _e.stopPropagation();
                if (!_e.hasOwnProperty('dataTransfer')) {
                    if (_e.hasOwnProperty('originalEvent')) {
                        _e = _e['originalEvent'];
                    }
                }
                if (_e && _e['dataTransfer'].files) {
                    var _file = _e['dataTransfer'].files[0];
                    if (_file.type.match(/image.*/)) {
                        _ref._fileReaderService.readAsDataURL(_file, _ref._parent);
                    }
                    else {
                        alert('not an image type.. sorry');
                    } // end -- if (image/*) type
                }
            };
            this._renderer.setProperty(_frm, "ondrag", _fxStopEvent);
            this._renderer.setProperty(_frm, "ondragstart", _fxStopEvent);
            this._renderer.setProperty(_frm, "ondragend", _fxStopEvent);
            this._renderer.setProperty(_frm, "ondragover", _fxStopEvent);
            this._renderer.setProperty(_frm, "ondragenter", _fxStopEvent);
            this._renderer.setProperty(_frm, "ondragleave", _fxStopEvent);
            this._renderer.setProperty(_frm, "ondrop", _fxDropEvent);
            this._isFormDragNDropSet = true;
        }
    };
    FileUploadComponent.prototype._getForm = function () {
        if (this._form == null) {
            this._form = this._element.nativeElement.querySelector('form');
        }
        return this._form;
    };
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
FileUploadComponent.CMODEL_KEY = "FileUploadComponent";
FileUploadComponent.DLG_TITLE = "DLG_TITLE";
FileUploadComponent.DLG_BTN_ONE_LABEL = "DLG_BTN_ONE_LABEL";
FileUploadComponent.DLG_BTN_TWO_LABEL = "DLG_BTN_TWO_LABEL";
__decorate([
    core_4.Input(),
    __metadata("design:type", photo_picker_component_1.PhotoPickerComponent)
], FileUploadComponent.prototype, "_parent", void 0);
FileUploadComponent = FileUploadComponent_1 = __decorate([
    core_1.Component({
        selector: 'file-upload',
        templateUrl: './view/file.upload.component.html',
        providers: [core_model_provider_1.CoreModelProvider, file_reader_1.FileReaderServiceProvider]
    }),
    __metadata("design:paramtypes", [core_2.ElementRef,
        core_3.Renderer2,
        coreModel_1.CoreModel,
        file_reader_1.FileReaderService])
], FileUploadComponent);
exports.FileUploadComponent = FileUploadComponent;
var FileUploadComponent_1;
//# sourceMappingURL=file.upload.component.js.map