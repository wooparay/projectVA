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
/**
 *  FileReaderService
 */
var FileReaderService = FileReaderService_1 = (function () {
    /**
     *  ctor.
     */
    function FileReaderService() {
        // placeholder for FileReader... check if it is supported or not
        this._fileReader = null;
    }
    FileReaderService.getInstance = function () {
        if (FileReaderService_1._instance == null) {
            FileReaderService_1._instance = new FileReaderService_1();
        }
        return FileReaderService_1._instance;
    };
    FileReaderService.prototype._isFileReaderSupported = function () {
        if (FileReader) {
            return true;
        }
        return false;
    };
    // methods here...
    FileReaderService.prototype.readAsDataURL = function (_file, _parentRef) {
        if (this._isFileReaderSupported() == true) {
            if (this._fileReader == null) {
                this._fileReader = new FileReader();
                this._fileReader.onload = function (e) {
                    if (_parentRef) {
                        _parentRef.addDataToPhotoDataList(e.currentTarget['result']);
                    }
                };
            }
            this._fileReader.readAsDataURL(_file);
        } // end -- if (fileReader supported)
    };
    return FileReaderService;
}()); // end -- FileReaderService definition
/* -------------------- */
/*  singleton settings  */
/* -------------------- */
FileReaderService._instance = null;
FileReaderService = FileReaderService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], FileReaderService);
exports.FileReaderService = FileReaderService;
/**
 *  Provider: FileR
 */
exports.FileReaderServiceProvider = {
    provide: FileReaderService,
    useFactory: FileReaderService.getInstance
};
var FileReaderService_1;
//# sourceMappingURL=file.reader.js.map