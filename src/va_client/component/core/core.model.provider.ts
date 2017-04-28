
//import { Injectable } from '@angular/core';
import { CoreModel } from './coreModel';

export let CoreModelProvider = {
  provide: CoreModel,
  useFactory: CoreModel.getInstance
};
