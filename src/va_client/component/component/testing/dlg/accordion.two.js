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
var photo_picker_set_load_or_del_dlg_1 = require("./../../photopicker/photo.picker.set.load.or.del.dlg");
var coreModel_1 = require("./../../../core/coreModel");
var core_model_provider_1 = require("./../../../core/core.model.provider");
var photo_picker_set_service_factory_1 = require("./../../../core/photo.picker.set.service.factory");
var i_photo_picker_set_service_1 = require("./../../photopicker/i.photo.picker.set.service");
var AccordionTwoComponent = (function () {
    function AccordionTwoComponent(_element, _renderer, _coreModel, _photoPickerSetService) {
        this._element = _element;
        this._renderer = _renderer;
        this._coreModel = _coreModel;
        this._photoPickerSetService = _photoPickerSetService;
        this._frm = {};
        this._frm = {
            'message': '', 'title': '',
            'warning': 'no', 'btn1_lbl': ''
        };
        console.log('** accordion two');
        console.log(this._photoPickerSetService);
        console.log(this._photoPickerSetService.getAvailablePhotoSets(null, null));
    }
    AccordionTwoComponent.prototype.showDlg = function (_e) {
        var _opt = {};
        /*
        _opt[MessageDlgComponent.DLG_TYPE]=MessageDlgComponent.DLG_TYPE_MESSAGE;
        _opt[MessageDlgComponent.DLG_MESSAGE]=this._frm['message'];
        _opt[MessageDlgComponent.DLG_TITLE]=this._frm['title'];
        _opt[MessageDlgComponent.DLG_WARNING]=(this._frm['warning']=='yes'?true:false);
        _opt[MessageDlgComponent.DLG_BUTTON_ONE_LABEL]=this._frm['btn1_lbl'];
        */
        this._coreModel.setDataByKey(message_dlg_component_1.MessageDlgComponent.CMODEL_KEY, _opt, true);
        photo_picker_set_load_or_del_dlg_1.PhotoPickerSetLoadOrDeleteDlgComponent.showDlg(this._element.nativeElement.querySelector('#dlgPhotoPickerSetLoad'), this._renderer);
    };
    return AccordionTwoComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", dialog_testing_component_1.DialogTestingComponent)
], AccordionTwoComponent.prototype, "_parent", void 0);
AccordionTwoComponent = __decorate([
    core_1.Component({
        selector: 'accordion-two',
        templateUrl: './view/accordion.two.component.html',
        providers: [core_model_provider_1.CoreModelProvider, photo_picker_set_service_factory_1.PhotoPickerSetServiceProvider]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.Renderer2,
        coreModel_1.CoreModel,
        i_photo_picker_set_service_1.AbstractPhotoPickerSetService])
], AccordionTwoComponent);
exports.AccordionTwoComponent = AccordionTwoComponent;
//# sourceMappingURL=accordion.two.js.map