"use strict";
//import { Injectable } from '@angular/core';
var coreModel_1 = require("./coreModel");
exports.CoreModelProvider = {
    provide: coreModel_1.CoreModel,
    useFactory: coreModel_1.CoreModel.getInstance
};
//# sourceMappingURL=core.model.provider.js.map