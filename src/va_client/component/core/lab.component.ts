import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lab',
  templateUrl: './view/lab.component.html',
})
export class LabComponent  {
  private _isPlayground:boolean = false;

  /**
   *  ctor (router is given)
   *  - syntax (private _router:Router) means create a private variable
   *    named _router and you can reference it by "this._router"
   */
  constructor(private _router:Router) {
    //console.log(_router.url);

    let _idx = window.location.href.indexOf('?');
    if (_idx!=-1) {
      // extract queryString
      let _qString = window.location.href.substring(_idx+1);
      let _tuples = _qString.split('&');
      for (let _i=0; _i<_tuples.length; _i++) {
        if (_tuples[_i]=='playground=true') {
          this._isPlayground = true;
          break;
        }
      } // end -- for (tuples)
    } // end -- _idx != -1

    this._displayRouterOutlet();
  } // -- ctor

  private _displayRouterOutlet() {
    // ** Test => http://localhost:3000/lab.html/?playground=true
    if (this._isPlayground==true) {
      this._router.navigate(['/playground']);
    } else {
// ** TODO normal lab feature
    }
  }

}
