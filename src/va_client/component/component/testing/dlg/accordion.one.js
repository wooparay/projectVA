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
var dialog_testing_component_1 = require("./dialog.testing.component");
var message_dlg_component_1 = require("./../../dialog/message.dlg.component");
var coreModel_1 = require("./../../../core/coreModel");
var core_model_provider_1 = require("./../../../core/core.model.provider");
var AccordionOneComponent = (function () {
    function AccordionOneComponent(_element, _renderer, _coreModel) {
        this._element = _element;
        this._renderer = _renderer;
        this._coreModel = _coreModel;
        this._frm = {};
        this._frm = {
            'message': '', 'title': '',
            'warning': 'no', 'btn1_lbl': ''
        };
    }
    AccordionOneComponent.prototype.showDlg = function (_e) {
        var _opt = {};
        _opt[message_dlg_component_1.MessageDlgComponent.DLG_TYPE] = message_dlg_component_1.MessageDlgComponent.DLG_TYPE_MESSAGE;
        _opt[message_dlg_component_1.MessageDlgComponent.DLG_MESSAGE] = this._frm['message'];
        _opt[message_dlg_component_1.MessageDlgComponent.DLG_TITLE] = this._frm['title'];
        _opt[message_dlg_component_1.MessageDlgComponent.DLG_WARNING] = (this._frm['warning'] == 'yes' ? true : false);
        //_opt[MessageDlgComponent.DLG_NEED_BUTTON_TWO]=(this._frm['btn2']=='yes'?true:false);
        _opt[message_dlg_component_1.MessageDlgComponent.DLG_BUTTON_ONE_LABEL] = this._frm['btn1_lbl'];
        this._coreModel.setDataByKey(message_dlg_component_1.MessageDlgComponent.CMODEL_KEY, _opt, true);
        message_dlg_component_1.MessageDlgComponent.showDlg(this._element.nativeElement.querySelector('#dlgMessage'), this._renderer);
    };
    return AccordionOneComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", dialog_testing_component_1.DialogTestingComponent)
], AccordionOneComponent.prototype, "_parent", void 0);
AccordionOneComponent = __decorate([
    core_1.Component({
        selector: 'accordion-one',
        templateUrl: './view/accordion.one.component.html',
        providers: [core_model_provider_1.CoreModelProvider]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.Renderer2,
        coreModel_1.CoreModel])
], AccordionOneComponent);
exports.AccordionOneComponent = AccordionOneComponent;
//# sourceMappingURL=accordion.one.js.map