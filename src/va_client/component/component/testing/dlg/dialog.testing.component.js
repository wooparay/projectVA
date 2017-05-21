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
var coreModel_1 = require("./../../../core/coreModel");
var core_model_provider_1 = require("./../../../core/core.model.provider");
var message_dlg_component_1 = require("./../../dialog/message.dlg.component");
var DialogTestingComponent = DialogTestingComponent_1 = (function () {
    function DialogTestingComponent(_element, _renderer, _coreModel) {
        this._element = _element;
        this._renderer = _renderer;
        this._coreModel = _coreModel;
        this._formObject = {};
        this._formObject['0'] = {
            'message': '', 'title': '',
            'warning': 'no', 'btn2': 'no',
            'btn2_lbl': '', 'btn1_lbl': ''
        };
    }
    DialogTestingComponent.prototype.ngOnDestroy = function () {
        this.cleanupDataBasedOnKey(DialogTestingComponent_1.CMODEL_KEY);
        // checking
        //console.log(this._coreModel.getFieldSetKeys());
    };
    /* ------------------ */
    /*  implementations   */
    /* ------------------ */
    DialogTestingComponent.prototype.cleanupDataBasedOnKey = function (_key) {
        this._coreModel.removeDataByKey(_key);
        this._coreModel.removeDataByKey(message_dlg_component_1.MessageDlgComponent.CMODEL_KEY);
    };
    /* ---------------- */
    /*  event handler   */
    /* ---------------- */
    DialogTestingComponent.prototype.showTweekOption = function (_idx) {
        var _curIdx = 0;
        var _btnId = 'btn_' + _idx;
        var _es = this._element.nativeElement.querySelectorAll('div.dialog-testing-dlg-scroll-container button.btn');
        if (_es) {
            for (var _i = 0, _es_1 = _es; _i < _es_1.length; _i++) {
                var _e = _es_1[_i];
                if (_e.id != _btnId) {
                    this._renderer.removeClass(this._element.nativeElement.querySelector('#' + _e.id), "active");
                }
                if (_curIdx != _idx) {
                    var _dTweek_1 = this._element.nativeElement.querySelector('#divTweek_' + _curIdx);
                    this._renderer.removeClass(_dTweek_1, "showing");
                    this._renderer.addClass(_dTweek_1, "hiding");
                }
                _curIdx++;
            } // end -- for (_es to apply active class or not)
        } // end -- _es (elements are valid)
        this._renderer.addClass(this._element.nativeElement.querySelector('#' + _btnId), "active");
        var _dTweek = this._element.nativeElement.querySelector('#divTweek_' + _idx);
        this._renderer.removeClass(_dTweek, "hiding");
        this._renderer.addClass(_dTweek, "showing");
    };
    DialogTestingComponent.prototype.showDlg_0 = function (_e) {
        var _opt = {};
        _opt[message_dlg_component_1.MessageDlgComponent.DLG_TYPE] = message_dlg_component_1.MessageDlgComponent.DLG_TYPE_HELP;
        _opt[message_dlg_component_1.MessageDlgComponent.DLG_MESSAGE] = this._formObject['0']['message'];
        _opt[message_dlg_component_1.MessageDlgComponent.DLG_TITLE] = this._formObject['0']['title'];
        _opt[message_dlg_component_1.MessageDlgComponent.DLG_WARNING] = (this._formObject['0']['warning'] == 'yes' ? true : false);
        _opt[message_dlg_component_1.MessageDlgComponent.DLG_NEED_BUTTON_TWO] = (this._formObject['0']['btn2'] == 'yes' ? true : false);
        _opt[message_dlg_component_1.MessageDlgComponent.DLG_BUTTON_ONE_LABEL] = this._formObject['0']['btn1_lbl'];
        _opt[message_dlg_component_1.MessageDlgComponent.DLG_BUTTON_TWO_LABEL] = this._formObject['0']['btn2_lbl'];
        this._coreModel.setDataByKey(message_dlg_component_1.MessageDlgComponent.CMODEL_KEY, _opt, true);
        message_dlg_component_1.MessageDlgComponent.showDlg(this._element.nativeElement.querySelector('#dlgMessage'), this._renderer);
    };
    DialogTestingComponent.prototype.showDlg_1 = function (_e) {
        console.log('dlg_1');
    };
    return DialogTestingComponent;
}());
DialogTestingComponent.CMODEL_KEY = 'DialogTestingComponent';
DialogTestingComponent = DialogTestingComponent_1 = __decorate([
    core_1.Component({
        selector: 'dialog-testing',
        templateUrl: './view/dialog.testing.component.html',
        providers: [core_model_provider_1.CoreModelProvider]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.Renderer2,
        coreModel_1.CoreModel])
], DialogTestingComponent);
exports.DialogTestingComponent = DialogTestingComponent;
var DialogTestingComponent_1;
//# sourceMappingURL=dialog.testing.component.js.map