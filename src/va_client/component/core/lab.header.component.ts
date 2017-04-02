import { Component } from '@angular/core';

@Component({
  selector: 'lab-header',
  templateUrl: './view/lab.header.component.html',
})
export class LabHeaderComponent  {


  private getCssClassForMenuFull() {
    let css = 'showing';
    return css;
  }

  private headerMenuClick(label) {
    console.log(label);
  }

  private signIn(event) {
    console.log(event);
  }

}
