import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

//import { PhotoPickerComponent } from './../component/photo.picker.component';

/**
 *  AIO = All-In-One config reader
 */
@Injectable()
export class AIOConfigService {
  private _configs:any = null;

  /**
   *  start parsing and reading config file(s)
   */
  constructor(private _http:Http) {
    this._loadConfig();
  }

  private _loadConfig() {
    // caveat? needs to get the "src" folder level to get access to the json file
    this._http.get('../../va_client/aio-config.json').subscribe(
      (res:Response) => {
        this._configs = res.json();
        // check if any alternative-config-location available
        if (this._configs.hasOwnProperty('general') &&
            this._configs.general.hasOwnProperty('alternative-config-location')) {
          let _altDir:string[] = this._configs.general['alternative-config-location'];

          if (_altDir) {
            for (let _dir of _altDir) {
              Promise.resolve({ '_dir': _dir, '_cfg': this._configs}).then((_param) => {
                this._http.get(_param._dir).subscribe(
                  (res:Response) => {
                    let _coreCfg:any = _param._cfg;
                    let _altCfg:any = res.json();

                    for (let _mod of _altCfg.modules) {
                      _coreCfg.modules.push(_mod);
//console.log(this.getConfigsByKey('photo.picker.component'));
                    }
                  }
                );  // subscribe
              }); // promise . then
            } // end -- for (altDir)
            //console.log(this._configs);
          } // altDir exists
        }
      }
    ); // http get subscribe method
  }


  private _isReady():boolean {
    if (this._configs) {
      return true;
    }
    return false;
  }

  public getConfigsByKey(_key:string) {
    let _ref:any = this;

    if (this._isReady()) {
      let _cfg:any = {};
      for (let _i=0; _i < this._configs.modules.length; _i++) {
        let _mod:any = this._configs.modules[_i];
        if (_mod.hasOwnProperty(_key)) {
          return _mod;
        }
      }
    } // if the config is ready
  }

}

// ** need to find a way to use singleton plus dependencies (deps: [http] didnot work)
