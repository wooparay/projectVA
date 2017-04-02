import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'playground',
  templateUrl: './view/playground.component.html',
})
export class PlaygroundComponent  {
  name = 'yoshika';

  constructor (private _router:Router) {

  }

  /* ------------------------------------------------------ */
  /*  interface methods for playground.side.menu component  */
  /* ------------------------------------------------------ */
  public changeRoutlet(routeName:string) {
    console.log(routeName);
  }


}
