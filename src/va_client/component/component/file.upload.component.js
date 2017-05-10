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
var coreModel_1 = require("./../core/coreModel");
var core_model_provider_1 = require("./../core/core.model.provider");
//import { PhotoPickerComponent } from './photo.picker.component';
var file_reader_1 = require("./../core/file.reader");
var generic_dlg_component_1 = require("./generic.dlg.component");
var FileUploadComponent = FileUploadComponent_1 = (function (_super) {
    __extends(FileUploadComponent, _super);
    /**
     *  constructor
     */
    function FileUploadComponent(_element, _renderer, _coreModel, _fileReaderService) {
        var _this = _super.call(this) || this;
        _this._element = _element;
        _this._renderer = _renderer;
        _this._coreModel = _coreModel;
        _this._fileReaderService = _fileReaderService;
        _this._isTainted = false;
        _this._filUpload = null;
        _this._isFormDragNDropSet = false;
        // value bound properties
        _this._lblTitle = 'Select';
        _this._canShowInfo = false;
        _this.buttonOneLabel = 'Select';
        _this.buttonTwoLabel = 'Cancel';
        return _this;
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
            // show which Title...
            if (_options.hasOwnProperty(FileUploadComponent_1.SHOW_INFO_FLAG)) {
                var _flag = _options[FileUploadComponent_1.SHOW_INFO_FLAG];
                if (_flag == true) {
                    if (_options.hasOwnProperty(FileUploadComponent_1.DLG_INFO_TITLE)) {
                        this._lblTitle = _options[FileUploadComponent_1.DLG_INFO_TITLE];
                    }
                    else if (_options.hasOwnProperty(FileUploadComponent_1.DLG_TITLE)) {
                        this._lblTitle = _options[FileUploadComponent_1.DLG_TITLE];
                    }
                    this._canShowInfo = true;
                }
                else {
                    if (_options.hasOwnProperty(FileUploadComponent_1.DLG_TITLE)) {
                        this._lblTitle = _options[FileUploadComponent_1.DLG_TITLE];
                    }
                    else {
                        this._lblTitle = 'Select';
                    }
                    this._canShowInfo = false;
                }
            }
            // any special labels for the button(s)
            if (_options.hasOwnProperty(FileUploadComponent_1.DLG_BTN_ONE_LABEL)) {
                this.buttonOneLabel = _options[FileUploadComponent_1.DLG_BTN_ONE_LABEL];
            }
            if (_options.hasOwnProperty(FileUploadComponent_1.DLG_BTN_TWO_LABEL)) {
                this.buttonTwoLabel = _options[FileUploadComponent_1.DLG_BTN_TWO_LABEL];
            }
        } // end -- if (_options)
        // handle the Form's drag n drop feature
        this._setFormDragNDrop(this);
    };
    FileUploadComponent.prototype._setFormDragNDrop = function (_ref) {
        if (this._isFormDragNDropSet == false) {
            var _frm = this.getForm(_ref._element);
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
                        // added _callback => close the dialogue
                        _ref._fileReaderService.readAsDataURL(_file, _ref._parent, function () { _ref.buttonTwoClick(null); });
                    }
                    else {
                        var _options = _ref._coreModel.getDataByKey(FileUploadComponent_1.CMODEL_KEY);
                        if (!_options) {
                            _options = {};
                        }
                        _options[FileUploadComponent_1.SHOW_INFO_FLAG] = true;
                        _options[FileUploadComponent_1.DLG_INFO_TITLE] = 'Select: the selected file is not an image type!';
                        _ref._coreModel.setDataByKey(FileUploadComponent_1.CMODEL_KEY, _options, true);
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
    FileUploadComponent.prototype._getFilUpload = function () {
        if (this._filUpload == null) {
            this._filUpload = this._element.nativeElement.querySelector('#filUpload');
        }
        return this._filUpload;
    };
    /* -------------- */
    /* -------------- */
    /*  event handler */
    /* -------------- */
    /* -------------- */
    /* -------------------------------- */
    /*  abstract method implementations */
    /* -------------------------------- */
    //private cancel(_event:MouseEvent) {
    FileUploadComponent.prototype.buttonTwoClick = function (_event) {
        if (this._isTainted) {
            alert('tainted');
        }
        else {
            FileUploadComponent_1.hideDlg(this.getDlg(this._element, 'dlgFileUpload'), this._renderer);
        }
        // reset the SHOW_INFO_FLAG flag to false
        this._resetShowInfoFlag();
    };
    //private select(_event:MouseEvent) {
    FileUploadComponent.prototype.buttonOneClick = function (_event) {
        // trigger the "file" input to click
        this._getFilUpload().click();
    };
    FileUploadComponent.prototype.fileUpdated = function (_event) {
        var _file = _event.target['files'][0];
        var _ref = this;
        if (_file) {
            if (_file.type.match(/image.*/)) {
                // added _callback => close the dialogue
                this._fileReaderService.readAsDataURL(_file, this._parent, function () {
                    _ref.buttonTwoClick(null);
                });
            }
            else {
                var _options = this._coreModel.getDataByKey(FileUploadComponent_1.CMODEL_KEY);
                if (!_options) {
                    _options = {};
                }
                _options[FileUploadComponent_1.SHOW_INFO_FLAG] = true;
                _options[FileUploadComponent_1.DLG_INFO_TITLE] = 'Select: the selected file is not an image type!';
                this._coreModel.setDataByKey(FileUploadComponent_1.CMODEL_KEY, _options, true);
                // not sure if it works
                _event.target['form'].reset();
            }
        } // end -- if (_file) could be null if "cancelled"
    };
    FileUploadComponent.prototype._resetShowInfoFlag = function () {
        var _options = this._coreModel.getDataByKey(FileUploadComponent_1.CMODEL_KEY);
        if (!_options) {
            _options = {};
        }
        _options[FileUploadComponent_1.SHOW_INFO_FLAG] = false;
        _options[FileUploadComponent_1.DLG_INFO_TITLE] = '';
        this._coreModel.setDataByKey(FileUploadComponent_1.CMODEL_KEY, _options, true);
    };
    return FileUploadComponent;
}(generic_dlg_component_1.GenericDlgComponent));
FileUploadComponent.CMODEL_KEY = "FileUploadComponent";
/*
 *  difference between DLG_TITLE and DLG_INFO_TITLE is that by default,
 *  will use DLG_TITLE, however if "SHOW_INFO_FLAG" is set to true,
 *  will pick DLG_INFO_TITLE if set
 */
FileUploadComponent.DLG_TITLE = "DLG_TITLE";
FileUploadComponent.DLG_INFO_TITLE = "DLG_INFO_TITLE";
FileUploadComponent.SHOW_INFO_FLAG = "SHOW_INFO_FLAG";
FileUploadComponent.DLG_BTN_ONE_LABEL = "DLG_BTN_ONE_LABEL";
FileUploadComponent.DLG_BTN_TWO_LABEL = "DLG_BTN_TWO_LABEL";
__decorate([
    core_4.Input(),
    __metadata("design:type", Object)
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
/* ****************
 *  dependency(s)
 *
 *  _parent => embedding parent (could be anything => now is hard-code as PhotoPickerComponent)
 *  _renderer2 => Renderer2 (for html DOM manipulation)
 *  _coreModel => CoreModel (act as a sharable storage for values across objects)
 * ****************/
//# sourceMappingURL=file.upload.component.js.map