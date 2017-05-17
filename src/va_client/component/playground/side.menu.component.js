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
var playground_component_1 = require("./../core/playground.component");
var PlaygroundSideMenuComponent = (function () {
    /* ---------------------------- */
    /*  ctor and lifecycle methods  */
    /* ---------------------------- */
    function PlaygroundSideMenuComponent() {
        // init
    }
    /*
     *  in case you need to do something after the view is done renedering
     *  - in this case.. check if the @Input has been referenced successfully
     */
    PlaygroundSideMenuComponent.prototype.ngAfterViewInit = function () {
        //this._ref.changeRoutlet('testing-baby');
    };
    /* -------------------------- */
    /*  private / utility methods */
    /* -------------------------- */
    PlaygroundSideMenuComponent.prototype.pluginRequested = function (label) {
        // based on the label value, change the router-outlet to show the correct component view
        if (label == 'photo-picker') {
            this._ref.changeRoutlet(label);
        }
        else {
            // normally should just pass through
            this._ref.changeRoutlet(label);
        }
    };
    return PlaygroundSideMenuComponent;
}());
__decorate([
    core_2.Input(),
    __metadata("design:type", playground_component_1.PlaygroundComponent)
], PlaygroundSideMenuComponent.prototype, "_ref", void 0);
PlaygroundSideMenuComponent = __decorate([
    core_1.Component({
        selector: 'playground-side-menu',
        templateUrl: './view/side.menu.component.html',
    }),
    __metadata("design:paramtypes", [])
], PlaygroundSideMenuComponent);
exports.PlaygroundSideMenuComponent = PlaygroundSideMenuComponent;
//# sourceMappingURL=side.menu.component.js.map