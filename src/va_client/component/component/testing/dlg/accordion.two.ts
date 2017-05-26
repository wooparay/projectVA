import { Component, Input, ElementRef, Renderer2 } from '@angular/core';

import { DialogTestingComponent } from './dialog.testing.component';
import { MessageDlgComponent } from './../../dialog/message.dlg.component';
import { PhotoPickerSetLoadOrDeleteDlgComponent } from './../../photopicker/photo.picker.set.load.or.del.dlg';

import { CoreModel } from './../../../core/coreModel';
import { CoreModelProvider } from './../../../core/core.model.provider';

import { PhotoPickerSetServiceProvider } from './../../../core/photo.picker.set.service.factory';
import { AbstractPhotoPickerSetService } from './../../photopicker/i.photo.picker.set.service';

@Component({
  selector: 'accordion-two',
  templateUrl: './view/accordion.two.component.html',
  providers: [ CoreModelProvider, PhotoPickerSetServiceProvider ]
})
export class AccordionTwoComponent {

  @Input() _parent:DialogTestingComponent;

  private _frm:any={};

  constructor(private _element:ElementRef,
    private _renderer:Renderer2,
    private _coreModel:CoreModel,
    private _photoPickerSetService:AbstractPhotoPickerSetService) {

    this._frm={
      'message': '', 'title': '',
      'warning': 'no', 'btn1_lbl': ''
    };
console.log('** accordion two');
console.log(this._photoPickerSetService);
console.log(this._photoPickerSetService.getAvailablePhotoSets(null, null));
  }

  private showDlg(_e:Event) {
    let _opt:any={};

    /*
    _opt[MessageDlgComponent.DLG_TYPE]=MessageDlgComponent.DLG_TYPE_MESSAGE;
    _opt[MessageDlgComponent.DLG_MESSAGE]=this._frm['message'];
    _opt[MessageDlgComponent.DLG_TITLE]=this._frm['title'];
    _opt[MessageDlgComponent.DLG_WARNING]=(this._frm['warning']=='yes'?true:false);
    _opt[MessageDlgComponent.DLG_BUTTON_ONE_LABEL]=this._frm['btn1_lbl'];
    */

    this._coreModel.setDataByKey(MessageDlgComponent.CMODEL_KEY, _opt, true);
    PhotoPickerSetLoadOrDeleteDlgComponent.showDlg(
      this._element.nativeElement.querySelector('#dlgPhotoPickerSetLoad'), this._renderer);
  }
}
