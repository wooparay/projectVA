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
var coreModel_1 = require("./../../core/coreModel");
var core_model_provider_1 = require("./../../core/core.model.provider");
//import { PhotoPickerComponent } from './photo.picker.component';
//import { FileReaderService, FileReaderServiceProvider } from './../core/file.reader';
var generic_dlg_component_1 = require("./generic.dlg.component");
var MessageDlgComponent = MessageDlgComponent_1 = (function (_super) {
    __extends(MessageDlgComponent, _super);
    /**
     *  contructor
     */
    function MessageDlgComponent(_element, _renderer, _coreModel) {
        var _this = _super.call(this) || this;
        _this._element = _element;
        _this._renderer = _renderer;
        _this._coreModel = _coreModel;
        _this._message = '*** some message ***';
        _this._showWarning = false;
        _this._showButtonTwo = true;
        _this._isHelpDlg = false;
        _this._buttonOneCallback = null;
        _this._buttonTwoCallback = null;
        return _this;
    }
    MessageDlgComponent.prototype.ngAfterContentChecked = function () {
        var _opt = this._coreModel.getDataByKey(MessageDlgComponent_1.CMODEL_KEY);
        if (_opt) {
            this._message = _opt[MessageDlgComponent_1.DLG_MESSAGE];
            this.titleLabel = _opt[MessageDlgComponent_1.DLG_TITLE];
            var _warning = _opt[MessageDlgComponent_1.DLG_WARNING];
            if (_warning && _warning == true) {
                this._showWarning = true;
            }
            else
                this._showWarning = false;
            var _needBtn2 = _opt[MessageDlgComponent_1.DLG_NEED_BUTTON_TWO];
            if (_needBtn2 && _needBtn2 == true) {
                this._showButtonTwo = true;
            }
            else
                this._showButtonTwo = false;
            var _type = _opt[MessageDlgComponent_1.DLG_TYPE];
            if (_type && _type == MessageDlgComponent_1.DLG_TYPE_HELP) {
                this._isHelpDlg = true;
            }
            else
                this._isHelpDlg = false;
            var _btnLbl = _opt[MessageDlgComponent_1.DLG_BUTTON_ONE_LABEL];
            if (_btnLbl)
                this.buttonOneLabel = _btnLbl;
            else
                this.buttonOneLabel = 'ok';
            _btnLbl = _opt[MessageDlgComponent_1.DLG_BUTTON_TWO_LABEL];
            if (_btnLbl)
                this.buttonTwoLabel = _btnLbl;
            else
                this.buttonTwoLabel = 'cancel';
            var _cb = _opt[MessageDlgComponent_1.DLG_BUTTON_ONE_CALLBACK];
            if (_cb && typeof (_cb) == 'function')
                this._buttonOneCallback = _cb;
            else
                this._buttonOneCallback = null;
            _cb = _opt[MessageDlgComponent_1.DLG_BUTTON_TWO_CALLBACK];
            if (_cb && typeof (_cb) == 'function')
                this._buttonTwoCallback = _cb;
            else
                this._buttonTwoCallback = null;
        } // end -- if (_opt is valid)
    };
    /* ------------------ */
    /*  implementations   */
    /* ------------------ */
    MessageDlgComponent.prototype.buttonOneClick = function (_e) {
        if (this._buttonOneCallback) {
            this._buttonOneCallback();
        }
        else
            this.buttonTwoClick(null);
    };
    MessageDlgComponent.prototype.buttonTwoClick = function (_e) {
        if (this._buttonTwoCallback) {
            this._buttonTwoCallback();
        }
        else {
            // cleanup to save memory
            this.titleLabel = '';
            this._message = '';
            this._showWarning = false;
            this._showButtonTwo = true;
            MessageDlgComponent_1.hideDlg(this.getDlg(this._element, 'dlgMessage'), this._renderer);
        }
    };
    return MessageDlgComponent;
}(generic_dlg_component_1.GenericDlgComponent));
MessageDlgComponent.CMODEL_KEY = "MessageDlgComponent";
MessageDlgComponent.DLG_TITLE = "DLG_TITLE";
MessageDlgComponent.DLG_MESSAGE = "DLG_MESSAGE";
MessageDlgComponent.DLG_WARNING = "DLG_WARNING";
MessageDlgComponent.DLG_TYPE = "DLG_TYPE";
MessageDlgComponent.DLG_NEED_BUTTON_TWO = "DLG_NEED_BUTTON_TWO";
MessageDlgComponent.DLG_BUTTON_ONE_LABEL = "DLG_BUTTON_ONE_LABEL";
MessageDlgComponent.DLG_BUTTON_TWO_LABEL = "DLG_BUTTON_TWO_LABEL";
MessageDlgComponent.DLG_BUTTON_ONE_CALLBACK = "DLG_BUTTON_ONE_CALLBACK";
MessageDlgComponent.DLG_BUTTON_TWO_CALLBACK = "DLG_BUTTON_TWO_CALLBACK";
// constants for DLG_TYPE
MessageDlgComponent.DLG_TYPE_MESSAGE = "message";
MessageDlgComponent.DLG_TYPE_HELP = "help";
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MessageDlgComponent.prototype, "_parent", void 0);
MessageDlgComponent = MessageDlgComponent_1 = __decorate([
    core_1.Component({
        selector: 'message-dlg',
        templateUrl: './view/message.dlg.component.html',
        providers: [core_model_provider_1.CoreModelProvider]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.Renderer2,
        coreModel_1.CoreModel])
], MessageDlgComponent);
exports.MessageDlgComponent = MessageDlgComponent;
var MessageDlgComponent_1;
//# sourceMappingURL=message.dlg.component.js.map