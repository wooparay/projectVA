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
var coreModel_1 = require("./../../core/coreModel");
var core_model_provider_1 = require("./../../core/core.model.provider");
//import { AIOConfigService } from './../../core/aio.config';
var DialogTestingComponent = DialogTestingComponent_1 = (function () {
    function DialogTestingComponent(_coreModel) {
        this._coreModel = _coreModel;
    }
    DialogTestingComponent.prototype.ngOnDestroy = function () {
        this.cleanupDataBasedOnKey(DialogTestingComponent_1.CMODEL_KEY);
        // checking
        console.log(this._coreModel.getFieldSetKeys());
    };
    /* ------------------ */
    /*  implementations   */
    /* ------------------ */
    DialogTestingComponent.prototype.cleanupDataBasedOnKey = function (_key) {
        this._coreModel.removeDataByKey(_key);
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
    __metadata("design:paramtypes", [coreModel_1.CoreModel])
], DialogTestingComponent);
exports.DialogTestingComponent = DialogTestingComponent;
var DialogTestingComponent_1;
//# sourceMappingURL=dialog.testing.component.js.map