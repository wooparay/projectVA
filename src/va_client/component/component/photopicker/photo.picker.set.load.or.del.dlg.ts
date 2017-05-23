import { Component, ElementRef, Renderer2, Input } from '@angular/core';

import { NgIf, NgFor, NgClass } from '@angular/common';

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
  private _frm:any;
  private _isLoadMode:boolean=true;
  // did the preview pane show up
  private _isPreviewMode:boolean=false;

  // css related objects
  private _divSetItemList:any = { 'text-truncate': false,
    'col-sm-12': true, 'col-md-12': true,
    'photo-picker-set-selection-item-list-pane-left': false
  };
  private _divSetPreview:any = { 'hiding':true,
    'photo-picker-set-selection-item-list-pane-right': false
  };

  private _setPreviewPhotoData:string='../../../static/img/photoPicker/emptyImage.gif';


  /**
   *  contructor
   */
  constructor(private _element:ElementRef,
    private _renderer:Renderer2,
    private _coreModel:CoreModel) {
    super();

    this._frm={ 'setChoices': [] };
  }
  ngAfterContentChecked() {
    this._getAvailableSet();
  }
  ngOnDestroy() {
    this._reset();
  }

  private _getAvailableSet() {
    if (this._frm['selectedSet']==null || this._frm['selectedSet'].length==0) {
/* TODO: get from a Mock/Normal service instead of hard-code
  sorted by latest creation date (most up to date ones at the top)
*/
      this._frm['selectedSet']=[
        { 'id': '001', "name": "bikini set 01", "checked": false, "photo.list": ['http://modelisto.com/photo/tara-booher-model-123835.jpg', 'http://static.face.nextmedia.com/images/next-photos/face/235/640pixfolder/W1035_307__DSC6389.jpg'] },
        { 'id': '002', "name": "doom game 01", "checked": false, "photo.list": ['https://upload.wikimedia.org/wikipedia/en/5/57/Doom_cover_art.jpg'] },
        { 'id': '003', "name": "quake game 99", "checked": false, "photo.list": ['http://3.bp.blogspot.com/-n7HdvzSs-Hg/U2YpvpQ_E9I/AAAAAAAAIcc/q1rfRlsbQJ0/s1600/4.jpg', 'http://2.bp.blogspot.com/-vBpZvMiQJnU/U2YpuFX-JzI/AAAAAAAAIcU/vFurHF7IB-s/s1600/2.jpg'] }
      ];
    }
    // set back the "checked" property when necessary
    if (this._frm['setChoices']) {
      // key is "id"; only store "id" thas is selected
      for (let _item of this._frm['selectedSet']) {
        let _val:boolean = this._frm['setChoices'][_item['id']];
        if (_val && _val==true) {
          _item['checked']=true;
        } else {
          _item['checked']=false;
        }
      } // end -- for
    } // end -- if (_frm[setChoices] valid)

    return this._frm['selectedSet'];
  }

  private _reset() {
    this._isLoadMode=true;
    this._frm={
      'selectedSet': [],
      'setChoices': []
    };
  }

  /* ------------------ */
  /*  implementations   */
  /* ------------------ */
  protected buttonOneClick(_e:Event):void {
    console.log('btn one clicked');
  }
  protected buttonTwoClick(_e:Event):void {
    // check if require to reset or not (done by ngOnDestroy)
    PhotoPickerSetLoadOrDeleteDlgComponent.hideDlg(
      this.getDlg(this._element, 'dlgPhotoPickerSetLoad'),
      this._renderer);
  }

  /* ------------------ */
  /*  event handlers    */
  /* ------------------ */

  private onSetItemClick(_e:Event, _id:string, _index:number) {
    if (_index > -1 && this._frm['selectedSet'] &&
      _index < this._frm['selectedSet'].length) {
      // toggle
      let _checked:boolean=!this._frm['selectedSet'][_index]['checked'];
      if (_checked==true) {
        this._frm['setChoices'][_id]=true;
      } else {
        delete this._frm['setChoices'][_id];
      }
      /*
       *  since _frm['setChoices'] is not observable (non ng-model binded)
       *  hence, you need to update the "checked" property to get a view refresh
       */
      this._frm['selectedSet'][_index]['checked']=_checked;
    } // end -- if (_index is valid)
  }
  private onPreviewSetClick(_e:Event, _id:string, _index:number) {
    _e.preventDefault();
    _e.stopPropagation();
    console.log('** preview button clicked > '+_index);

    if (this._isPreviewMode==false) {
      this._divSetItemList={
        'text-truncate': true, 'col-sm-6': true, 'col-md-6': true,
        'photo-picker-set-selection-item-list-pane-left': true
      };
      this._divSetPreview={
        'col-sm-6': true, 'col-md-6': true, 'showing': true,
        'photo-picker-set-selection-item-list-pane-right': true
      };
      this._isPreviewMode=true;
    }
  }
  private hidePreviewPane() {
    this._isPreviewMode=false;
    this._divSetItemList={
      'text-truncate': false, 'col-sm-6': false, 'col-md-6': false,
      'col-sm-12': true, 'col-md-12': true,
      'photo-picker-set-selection-item-list-pane-left': false
    };
    this._divSetPreview={
      'col-sm-6': false, 'col-md-6': false, 'hiding': true, 'showing': false,
      'photo-picker-set-selection-item-list-pane-right': false
    };
  }


}
