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

  private headerMenuClick(label:string) {
    console.log(label);
  }

  private signIn(event:any) {
    console.log(event);
  }

}
