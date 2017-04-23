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
// ** optional (unless you need to access this component's methods)
var file_upload_component_1 = require("./file.upload.component");
var PhotoPickerComponent = (function () {
    function PhotoPickerComponent(_coreModel, _renderer, _element) {
        this._coreModel = _coreModel;
        this._renderer = _renderer;
        this._element = _element;
        console.log(_coreModel.getCreationTimestamp());
    }
    /* ################################################################## */
    /*  methods for handling singleton level resources like common dialog */
    /* ################################################################## */
    PhotoPickerComponent.prototype.displayUploadDlg = function (_ref) {
        //console.log('** inside parent(PhotoPickerComponent) displayUploadDlg');
        //_ref._dbg = new Date();
        //console.log(_ref._dbg);
        // ** example on Renderer2 to manipulate the DOM
        /*let _widgetContainer:any = this._renderer.selectRootElement('a i.fa-close');
        console.log(_widgetContainer);
        this._renderer.removeChild(_widgetContainer);*/
        // ** example on how ElementRef could manipulate the DOM
        /*console.log(this._element.nativeElement);
        console.log(this._element.nativeElement.querySelector('file-upload span').innerHTML='yo man');*/
        file_upload_component_1.FileUploadComponent.showDlgFileUpload(this._element.nativeElement.querySelector('#dlgFileUpload'), this._renderer);
    };
    return PhotoPickerComponent;
}());
PhotoPickerComponent = __decorate([
    core_1.Component({
        selector: 'photo-picker',
        templateUrl: './view/photo.picker.component.html',
        providers: [coreModel_1.CoreModel]
    }),
    __metadata("design:paramtypes", [coreModel_1.CoreModel,
        core_3.Renderer2,
        core_2.ElementRef])
], PhotoPickerComponent);
exports.PhotoPickerComponent = PhotoPickerComponent;
/*
 *  Renderer2 tutorial =>
 *    https://netbasal.com/angular-2-explore-the-renderer-service-e43ef673b26c
 */
//# sourceMappingURL=photo.picker.component.js.map