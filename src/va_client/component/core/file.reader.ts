import { Injectable } from '@angular/core';

import { PhotoPickerComponent } from './../component/photo.picker.component';

/**
 *  FileReaderService
 */
@Injectable()
export class FileReaderService {
  /* -------------------- */
  /*  singleton settings  */
  /* -------------------- */
  private static _instance:FileReaderService = null;
  public static getInstance():FileReaderService {
    if (FileReaderService._instance == null) {
      FileReaderService._instance = new FileReaderService();
    }
    return FileReaderService._instance;
  }
  // placeholder for FileReader... check if it is supported or not
  private _fileReader:any = null;

  private _isFileReaderSupported():boolean {
    if (FileReader) {
      return true;
    }
    return false;
  }

  /**
   *  ctor.
   */
  constructor() {}

  // methods here...
  public readAsDataURL(_file:any, _parentRef:PhotoPickerComponent, _callback:any) {
    if (this._isFileReaderSupported() == true) {
      if (this._fileReader == null) {
        this._fileReader = new FileReader();
        this._fileReader.onload = function(e:Event) {
          if (_parentRef) {
            _parentRef.addDataToPhotoDataList(e.currentTarget['result']);
          }
          if (_callback && typeof(_callback)=='function') {
            _callback();
          }
        };
      }
      this._fileReader.readAsDataURL(_file);
    } // end -- if (fileReader supported)
  }

} // end -- FileReaderService definition

/**
 *  Provider: FileR
 */
export let FileReaderServiceProvider = {
  provide: FileReaderService,
  useFactory: FileReaderService.getInstance
};
