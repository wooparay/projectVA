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
        _this._isLoadMode = true;
        // did the preview pane show up
        _this._isPreviewMode = false;
        // css related objects
        _this._divSetItemList = { 'text-truncate': false,
            'col-sm-12': true, 'col-md-12': true,
            'photo-picker-set-selection-item-list-pane-left': false
        };
        _this._divSetPreview = { 'hiding': true,
            'photo-picker-set-selection-item-list-pane-right': false
        };
        _this._setPreviewPhotoData = '../../../static/img/photoPicker/emptyImage.gif';
        _this._frm = { 'setChoices': [] };
        return _this;
    }
    PhotoPickerSetLoadOrDeleteDlgComponent.prototype.ngAfterContentChecked = function () {
        this._getAvailableSet();
    };
    PhotoPickerSetLoadOrDeleteDlgComponent.prototype.ngOnDestroy = function () {
        this._reset();
    };
    PhotoPickerSetLoadOrDeleteDlgComponent.prototype._getAvailableSet = function () {
        if (this._frm['selectedSet'] == null || this._frm['selectedSet'].length == 0) {
            /* TODO: get from a Mock/Normal service instead of hard-code
              sorted by latest creation date (most up to date ones at the top)
            */
            this._frm['selectedSet'] = [
                { 'id': '001', "name": "bikini set 01", "checked": false, "photo.list": ['http://modelisto.com/photo/tara-booher-model-123835.jpg', 'http://static.face.nextmedia.com/images/next-photos/face/235/640pixfolder/W1035_307__DSC6389.jpg'] },
                { 'id': '002', "name": "doom game 01", "checked": false, "photo.list": ['https://upload.wikimedia.org/wikipedia/en/5/57/Doom_cover_art.jpg'] },
                { 'id': '003', "name": "quake game 99", "checked": false, "photo.list": ['http://3.bp.blogspot.com/-n7HdvzSs-Hg/U2YpvpQ_E9I/AAAAAAAAIcc/q1rfRlsbQJ0/s1600/4.jpg', 'http://2.bp.blogspot.com/-vBpZvMiQJnU/U2YpuFX-JzI/AAAAAAAAIcU/vFurHF7IB-s/s1600/2.jpg'] }
            ];
        }
        // set back the "checked" property when necessary
        if (this._frm['setChoices']) {
            // key is "id"; only store "id" thas is selected
            for (var _i = 0, _a = this._frm['selectedSet']; _i < _a.length; _i++) {
                var _item = _a[_i];
                var _val = this._frm['setChoices'][_item['id']];
                if (_val && _val == true) {
                    _item['checked'] = true;
                }
                else {
                    _item['checked'] = false;
                }
            } // end -- for
        } // end -- if (_frm[setChoices] valid)
        return this._frm['selectedSet'];
    };
    PhotoPickerSetLoadOrDeleteDlgComponent.prototype._reset = function () {
        this._isLoadMode = true;
        this._frm = {
            'selectedSet': [],
            'setChoices': []
        };
    };
    /* ------------------ */
    /*  implementations   */
    /* ------------------ */
    PhotoPickerSetLoadOrDeleteDlgComponent.prototype.buttonOneClick = function (_e) {
        console.log('btn one clicked');
    };
    PhotoPickerSetLoadOrDeleteDlgComponent.prototype.buttonTwoClick = function (_e) {
        // check if require to reset or not (done by ngOnDestroy)
        PhotoPickerSetLoadOrDeleteDlgComponent_1.hideDlg(this.getDlg(this._element, 'dlgPhotoPickerSetLoad'), this._renderer);
    };
    /* ------------------ */
    /*  event handlers    */
    /* ------------------ */
    PhotoPickerSetLoadOrDeleteDlgComponent.prototype.onSetItemClick = function (_e, _id, _index) {
        if (_index > -1 && this._frm['selectedSet'] &&
            _index < this._frm['selectedSet'].length) {
            // toggle
            var _checked = !this._frm['selectedSet'][_index]['checked'];
            if (_checked == true) {
                this._frm['setChoices'][_id] = true;
            }
            else {
                delete this._frm['setChoices'][_id];
            }
            /*
             *  since _frm['setChoices'] is not observable (non ng-model binded)
             *  hence, you need to update the "checked" property to get a view refresh
             */
            this._frm['selectedSet'][_index]['checked'] = _checked;
        } // end -- if (_index is valid)
    };
    PhotoPickerSetLoadOrDeleteDlgComponent.prototype.onPreviewSetClick = function (_e, _id, _index) {
        _e.preventDefault();
        _e.stopPropagation();
        console.log('** preview button clicked > ' + _index);
        if (this._isPreviewMode == false) {
            this._divSetItemList = {
                'text-truncate': true, 'col-sm-6': true, 'col-md-6': true,
                'photo-picker-set-selection-item-list-pane-left': true
            };
            this._divSetPreview = {
                'col-sm-6': true, 'col-md-6': true, 'showing': true,
                'photo-picker-set-selection-item-list-pane-right': true
            };
            this._isPreviewMode = true;
        }
    };
    PhotoPickerSetLoadOrDeleteDlgComponent.prototype.hidePreviewPane = function () {
        this._isPreviewMode = false;
        this._divSetItemList = {
            'text-truncate': false, 'col-sm-6': false, 'col-md-6': false,
            'col-sm-12': true, 'col-md-12': true,
            'photo-picker-set-selection-item-list-pane-left': false
        };
        this._divSetPreview = {
            'col-sm-6': false, 'col-md-6': false, 'hiding': true, 'showing': false,
            'photo-picker-set-selection-item-list-pane-right': false
        };
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