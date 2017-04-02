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
var router_1 = require("@angular/router");
var LabComponent = (function () {
    /**
     *  ctor (router is given)
     *  - syntax (private _router:Router) means create a private variable
     *    named _router and you can reference it by "this._router"
     */
    function LabComponent(_router) {
        //console.log(_router.url);
        this._router = _router;
        this._isPlayground = false;
        var _idx = window.location.href.indexOf('?');
        if (_idx != -1) {
            // extract queryString
            var _qString = window.location.href.substring(_idx + 1);
            var _tuples = _qString.split('&');
            for (var _i = 0; _i < _tuples.length; _i++) {
                if (_tuples[_i] == 'playground=true') {
                    this._isPlayground = true;
                    break;
                }
            } // end -- for (tuples)
        } // end -- _idx != -1
        this._displayRouterOutlet();
    } // -- ctor
    LabComponent.prototype._displayRouterOutlet = function () {
        // ** Test => http://localhost:3000/lab.html/?playground=true
        if (this._isPlayground == true) {
            this._router.navigate(['/playground']);
        }
        else {
        }
    };
    return LabComponent;
}());
LabComponent = __decorate([
    core_1.Component({
        selector: 'lab',
        templateUrl: './view/lab.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router])
], LabComponent);
exports.LabComponent = LabComponent;
//# sourceMappingURL=lab.component.js.map