import { Component, ElementRef, Renderer2, Input } from '@angular/core';

import { NgIf, NgFor } from '@angular/common';

import { CoreModel } from './../../core/coreModel';
import { CoreModelProvider } from './../../core/core.model.provider';

//import { PhotoPickerComponent } from './photo.picker.component';
//import { FileReaderService, FileReaderServiceProvider } from './../core/file.reader';

import { GenericDlgComponent } from './../dialog/generic.dlg.component';

@Component({
  selector: 'photo-picker-set-load-or-del-dlg',
  templateUrl: './view/photo.picker.set.load.or.del.dlg.component.html',
  providers: [ CoreModelProvider ]
})
export class PhotoPickerSetLoadOrDeleteDlgComponent extends GenericDlgComponent {
  public static CMODEL_KEY:string = "PhotoPickerSetLoadDlgComponent";
  public static DLG_TYPE:string = "DLG_TYPE";


  public static DLG_TYPE_LOAD:string = 'load';
  public static DLG_TYPE_DELETE:string = 'delete';

  // parent component (could be anything, hence didn't state the "type")
  @Input() _parent:any;
  private _frm:any={};
  private _isLoadMode:boolean=true;


  /**
   *  contructor
   */
  constructor(private _element:ElementRef,
    private _renderer:Renderer2,
    private _coreModel:CoreModel) {
    super();

/* TODO: get from a Mock/Normal service instead of hard-code */
    this._frm['selectedSet']=[
      { 'id': '001', "name": "bikini set 01", "checked": false, "photo.list": ['http://modelisto.com/photo/tara-booher-model-123835.jpg', 'http://static.face.nextmedia.com/images/next-photos/face/235/640pixfolder/W1035_307__DSC6389.jpg'] },
      { 'id': '002', "name": "doom game 01", "checked": true, "photo.list": ['https://upload.wikimedia.org/wikipedia/en/5/57/Doom_cover_art.jpg'] },
      { 'id': '003', "name": "quake game 99", "checked": true, "photo.list": ['http://3.bp.blogspot.com/-n7HdvzSs-Hg/U2YpvpQ_E9I/AAAAAAAAIcc/q1rfRlsbQJ0/s1600/4.jpg', 'http://2.bp.blogspot.com/-vBpZvMiQJnU/U2YpuFX-JzI/AAAAAAAAIcU/vFurHF7IB-s/s1600/2.jpg'] }
    ];
  }
  ngAfterContentChecked() {
    console.log(this._frm);
  }

  private _reset() {
    this._isLoadMode=true;
    this._frm={
      'selectedSet': []
    };
  }

  /* ------------------ */
  /*  implementations   */
  /* ------------------ */
  protected buttonOneClick(_e:Event):void {
    console.log('btn one clicked');
  }
  protected buttonTwoClick(_e:Event):void {
    console.log('btn two clicked');

    this._reset();
    PhotoPickerSetLoadOrDeleteDlgComponent.hideDlg(
      this.getDlg(this._element, 'dlgPhotoPickerSetLoad'),
      this._renderer);
  }


}
