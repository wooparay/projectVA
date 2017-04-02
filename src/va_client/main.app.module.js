"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var hello_component_1 = require("./component/playground/hello.component");
var lab_component_1 = require("./component/core/lab.component");
var lab_header_component_1 = require("./component/core/lab.header.component");
var playground_component_1 = require("./component/core/playground.component");
var side_menu_component_1 = require("./component/playground/side.menu.component");
var MainAppModule = (function () {
    function MainAppModule() {
    }
    return MainAppModule;
}());
MainAppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot([
                {
                    path: 'playground',
                    component: playground_component_1.PlaygroundComponent,
                    children: [
                        {
                            path: '',
                            component: hello_component_1.HelloComponent
                        }
                    ] /* end of "child" routes */
                }
            ])
        ],
        // [step] would need to declare the kinds of components (router etc)
        declarations: [
            hello_component_1.HelloComponent,
            lab_component_1.LabComponent, lab_header_component_1.LabHeaderComponent,
            playground_component_1.PlaygroundComponent, side_menu_component_1.PlaygroundSideMenuComponent
        ],
        bootstrap: [lab_component_1.LabComponent]
    })
], MainAppModule);
exports.MainAppModule = MainAppModule;
//# sourceMappingURL=main.app.module.js.map