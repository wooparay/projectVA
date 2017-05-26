"use strict";
var http_1 = require("@angular/http");
//import { PhotoPickerComponent } from './../component/photo.picker.component';
/**
 *  AIO = All-In-One config reader
 */
//@Injectable()
var AIOConfigService = (function () {
    /**
     *  start parsing and reading config file(s)
     */
    function AIOConfigService(_http) {
        this._http = _http;
        this._configs = null;
        this._loadConfig();
    }
    AIOConfigService.prototype._loadConfig = function () {
        var _this = this;
        // caveat? needs to get the "src" folder level to get access to the json file
        this._http.get('../../va_client/aio-config.json').subscribe(function (res) {
            _this._configs = res.json();
            // check if any alternative-config-location available
            if (_this._configs.hasOwnProperty('general') &&
                _this._configs.general.hasOwnProperty('alternative-config-location')) {
                var _altDir = _this._configs.general['alternative-config-location'];
                if (_altDir) {
                    for (var _a = 0, _altDir_1 = _altDir; _a < _altDir_1.length; _a++) {
                        var _dir = _altDir_1[_a];
                        Promise.resolve({ '_dir': _dir, '_cfg': _this._configs }).then(function (_param) {
                            _this._http.get(_param._dir).subscribe(function (res) {
                                var _coreCfg = _param._cfg;
                                var _altCfg = res.json();
                                for (var _a = 0, _b = _altCfg.modules; _a < _b.length; _a++) {
                                    var _mod = _b[_a];
                                    _coreCfg.modules.push(_mod);
                                }
                            }); // subscribe
                        }); // promise . then
                    } // end -- for (altDir)
                } // altDir exists
            }
        }); // http get subscribe method
    };
    AIOConfigService.prototype._isReady = function () {
        if (this._configs) {
            return true;
        }
        return false;
    };
    AIOConfigService.prototype.getConfigsByKey = function (_key) {
        var _ref = this;
        if (this._isReady()) {
            var _cfg = {};
            for (var _i = 0; _i < this._configs.modules.length; _i++) {
                var _mod = this._configs.modules[_i];
                if (_mod.hasOwnProperty(_key)) {
                    return _mod;
                }
            }
        } // if the config is ready
    };
    AIOConfigService.getInstance = function (_http) {
        if (AIOConfigService._instance == null) {
            AIOConfigService._instance = new AIOConfigService(_http);
        }
        return AIOConfigService._instance;
    };
    return AIOConfigService;
}());
/**
 *  singleton related attributes and method
 */
AIOConfigService._instance = null;
exports.AIOConfigService = AIOConfigService;
// ** need to find a way to use singleton plus dependencies (deps: [http] didnot work)
exports.AIOConfigServiceProvider = {
    provide: AIOConfigService,
    useFactory: AIOConfigService.getInstance,
    deps: [http_1.Http]
};
//# sourceMappingURL=aio.config.js.map