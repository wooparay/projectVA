import { Injectable } from '@angular/core';

/**
 *  sort of like a singleton for storing information across
 *  component(s)
 */
@Injectable()
export class CoreModel {
  private _creationTimestamp:any;

  constructor() {
    this._creationTimestamp = new Date();
  }

  public getCreationTimestamp() {
    return this._creationTimestamp;
  }

}
