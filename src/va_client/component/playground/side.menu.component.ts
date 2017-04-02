import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'playground-side-menu',
  templateUrl: './view/side.menu.component.html',
})
export class PlaygroundSideMenuComponent  {
  // object binding between parent and child
  @Input() _ref:PlaygroundComponent;

  /* ---------------------------- */
  /*  ctor and lifecycle methods  */
  /* ---------------------------- */

  constructor() {
    // init
  }
  /*
   *  in case you need to do something after the view is done renedering
   *  - in this case.. check if the @Input has been referenced successfully
   */
  ngAfterViewInit() {
    //this._ref.changeRoutlet('testing-baby');
  }

  /* -------------------------- */
  /*  private / utility methods */
  /* -------------------------- */

  private pluginRequested(label) {
    console.log(label);
    console.log(this._ref.changeRoutlet);
  }

}