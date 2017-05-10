import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { Input } from '@angular/core';
import { NgIf } from '@angular/common';

import { GenericDlgComponent } from './generic.dlg.component';

//import { CoreModel } from './../core/coreModel';
//import { CoreModelProvider } from './../core/core.model.provider';

//import { FileReaderService, FileReaderServiceProvider } from './../core/file.reader';

@Component({
  selector: 'photo-big-preview-dlg',
  templateUrl: './view/photo.big.preview.component.html'
  //,providers: [ CoreModelProvider ]
})
export class PhotoBigPreviewComponent extends GenericDlgComponent {

  @Input() _dataUri:string;

  constructor() {
    super();
    this.titleLabel = 'preview';
  }

  //ngAfterContentChecked() {}

  /* -------------------------------- */
  /*  abstract method implementations */
  /* -------------------------------- */

  protected buttonOneClick(_e:Event):void {
    console.log(this.buttonOneLabel+' clicked');
  }
  protected buttonTwoClick(_e:Event):void {
    console.log(this.buttonTwoLabel+' clicked');
  }

}
