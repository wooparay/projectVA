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
var generic_dlg_component_1 = require("./../dialog/generic.dlg.component");
var PhotoPickerSetLoadOrDeleteDlgComponent = PhotoPickerSetLoadOrDeleteDlgComponent_1 = (function (_super) {
    __extends(PhotoPickerSetLoadOrDeleteDlgComponent, _super);
    /**
     *  contructor
     */
    function PhotoPickerSetLoadOrDeleteDlgComponent(_element, _renderer, _coreModel) {
        var _this = _super.call(this) || this;
        _this._element = _element;
        _this._renderer = _renderer;
        _this._coreModel = _coreModel;
        _this._frm = {};
        _this._isLoadMode = true;
        /* TODO: get from a Mock/Normal service instead of hard-code */
        _this._frm['selectedSet'] = [
            { 'id': '001', "name": "bikini set 01", "checked": false, "photo.list": ['http://modelisto.com/photo/tara-booher-model-123835.jpg', 'http://static.face.nextmedia.com/images/next-photos/face/235/640pixfolder/W1035_307__DSC6389.jpg'] },
            { 'id': '002', "name": "doom game 01", "checked": true, "photo.list": ['https://upload.wikimedia.org/wikipedia/en/5/57/Doom_cover_art.jpg'] },
            { 'id': '003', "name": "quake game 99", "checked": true, "photo.list": ['http://3.bp.blogspot.com/-n7HdvzSs-Hg/U2YpvpQ_E9I/AAAAAAAAIcc/q1rfRlsbQJ0/s1600/4.jpg', 'http://2.bp.blogspot.com/-vBpZvMiQJnU/U2YpuFX-JzI/AAAAAAAAIcU/vFurHF7IB-s/s1600/2.jpg'] }
        ];
        return _this;
    }
    PhotoPickerSetLoadOrDeleteDlgComponent.prototype.ngAfterContentChecked = function () {
        console.log(this._frm);
    };
    PhotoPickerSetLoadOrDeleteDlgComponent.prototype._reset = function () {
        this._isLoadMode = true;
        this._frm = {
            'selectedSet': []
        };
    };
    /* ------------------ */
    /*  implementations   */
    /* ------------------ */
    PhotoPickerSetLoadOrDeleteDlgComponent.prototype.buttonOneClick = function (_e) {
        console.log('btn one clicked');
    };
    PhotoPickerSetLoadOrDeleteDlgComponent.prototype.buttonTwoClick = function (_e) {
        console.log('btn two clicked');
        this._reset();
        PhotoPickerSetLoadOrDeleteDlgComponent_1.hideDlg(this.getDlg(this._element, 'dlgPhotoPickerSetLoad'), this._renderer);
    };
    return PhotoPickerSetLoadOrDeleteDlgComponent;
}(generic_dlg_component_1.GenericDlgComponent));
PhotoPickerSetLoadOrDeleteDlgComponent.CMODEL_KEY = "PhotoPickerSetLoadDlgComponent";
PhotoPickerSetLoadOrDeleteDlgComponent.DLG_TYPE = "DLG_TYPE";
PhotoPickerSetLoadOrDeleteDlgComponent.DLG_TYPE_LOAD = 'load';
PhotoPickerSetLoadOrDeleteDlgComponent.DLG_TYPE_DELETE = 'delete';
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PhotoPickerSetLoadOrDeleteDlgComponent.prototype, "_parent", void 0);
PhotoPickerSetLoadOrDeleteDlgComponent = PhotoPickerSetLoadOrDeleteDlgComponent_1 = __decorate([
    core_1.Component({
        selector: 'photo-picker-set-load-or-del-dlg',
        templateUrl: './view/photo.picker.set.load.or.del.dlg.component.html',
        providers: [core_model_provider_1.CoreModelProvider]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.Renderer2,
        coreModel_1.CoreModel])
], PhotoPickerSetLoadOrDeleteDlgComponent);
exports.PhotoPickerSetLoadOrDeleteDlgComponent = PhotoPickerSetLoadOrDeleteDlgComponent;
var PhotoPickerSetLoadOrDeleteDlgComponent_1;
//# sourceMappingURL=photo.picker.set.load.or.del.dlg.js.map