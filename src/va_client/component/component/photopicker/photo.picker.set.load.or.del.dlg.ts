import { Component, ElementRef, Renderer2, Input } from '@angular/core';

import { NgIf, NgFor, NgClass, NgStyle } from '@angular/common';

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
  public static IMG_DEFAULT:string='../../../static/img/photoPicker/emptyImage.gif';


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
  private _setPreviewPhotoDataCss:any={
    'photo-picker-set-selection-preview-img-default-dimension': true
  };
  private _setPreviewPhotoDataStyle:any={};

  private static MAX_PREVIEW_PHOT_DIMEN:number=500; // max magnification is 5x
  private static PREVIEW_PHOT_DIMEN_INTERVAL:number=50; // maginification step is 50
  private _previewPhotoDimenPercentage:number=100;

  // change this data value for the required preview
  private _setPreviewPhotoData:string=PhotoPickerSetLoadOrDeleteDlgComponent.IMG_DEFAULT;
  private _setPreviewPhotoList:any;
  private _previousPreviewPhotoDimenPercentage:number=0;

  /**
   *  contructor
   */
  constructor(private _element:ElementRef,
    private _renderer:Renderer2,
    private _coreModel:CoreModel) {
    super();

    this._frm={ 'setChoices': [] };
    this.buttonOneLabel='ok';
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
        { 'id': '003', "name": "quake game 99", "checked": false, "photo.list": ['http://3.bp.blogspot.com/-n7HdvzSs-Hg/U2YpvpQ_E9I/AAAAAAAAIcc/q1rfRlsbQJ0/s1600/4.jpg', 'http://2.bp.blogspot.com/-vBpZvMiQJnU/U2YpuFX-JzI/AAAAAAAAIcU/vFurHF7IB-s/s1600/2.jpg'] },
        { 'id': '999', "name": "everything babe", "checked": true, "photo.list": ['http://2.bp.blogspot.com/-vBpZvMiQJnU/U2YpuFX-JzI/AAAAAAAAIcU/vFurHF7IB-s/s1600/2.jpg', 'https://upload.wikimedia.org/wikipedia/en/5/57/Doom_cover_art.jpg', 'http://modelisto.com/photo/tara-booher-model-123835.jpg', 'http://static.face.nextmedia.com/images/next-photos/face/235/640pixfolder/W1035_307__DSC6389.jpg', 'http://3.bp.blogspot.com/-n7HdvzSs-Hg/U2YpvpQ_E9I/AAAAAAAAIcc/q1rfRlsbQJ0/s1600/4.jpg', 'https://vignette3.wikia.nocookie.net/villains/images/0/00/Aku_Human_Form.jpg/revision/latest?cb=20150307212243'] }
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

  /*
   *  toggle selection
   */
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

  /*
   *  to show the set preview pane (list of images associated with the set)
   */
  private onPreviewSetClick(_e:Event, _id:string, _index:number) {
    _e.preventDefault();
    _e.stopPropagation();
    //console.log('** preview button clicked > '+_index);

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
    // get back the data (photo list) according to the given _id
    if (this._frm['selectedSet'].length > _index) {
      this._setPreviewPhotoList=this._frm['selectedSet'][_index]['photo.list'];
      // also reset the dataUri back to the original empty image + default css
      this._setPreviewPhotoData=PhotoPickerSetLoadOrDeleteDlgComponent.IMG_DEFAULT;
      this.bestFitPreviewPhotoDimen();
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

  /* ------------------------ */
  /*  preview photo related   */
  /* ------------------------ */

  private updatePreviewPhotoData(_dataUri:string, _index:number) {
    this._setPreviewPhotoData=_dataUri;
  }

  /*
   *  when you want to magnify the preview photo
   */
  private increasePreviewPhotoDimen() {
    if (this._previewPhotoDimenPercentage < PhotoPickerSetLoadOrDeleteDlgComponent.MAX_PREVIEW_PHOT_DIMEN) {
      this._previewPhotoDimenPercentage+=PhotoPickerSetLoadOrDeleteDlgComponent.PREVIEW_PHOT_DIMEN_INTERVAL;
      // reset since already reached.. max
      if (!this._canIncreasePreviewDataDimenPercentage()) {
        this._previewPhotoDimenPercentage-=PhotoPickerSetLoadOrDeleteDlgComponent.PREVIEW_PHOT_DIMEN_INTERVAL;
      }
    }
    this._setPreviewPhotoDataCss={
      'photo-picker-set-selection-preview-img-default-dimension': false
    };
    this._setPreviewPhotoDataStyle={
      'max-height': this._previewPhotoDimenPercentage+'%',
      'max-width': this._previewPhotoDimenPercentage+'%'
    };
  }
  private decreasePreviewPhotoDimen() {
    if (this._previewPhotoDimenPercentage > 100) {
      this._previewPhotoDimenPercentage-=PhotoPickerSetLoadOrDeleteDlgComponent.PREVIEW_PHOT_DIMEN_INTERVAL;
      //console.log(this._element.nativeElement.querySelector('#imgPreviewData').width+', '+this._previewPhotoDimenPercentage);
    }
    this._setPreviewPhotoDataCss={
      'photo-picker-set-selection-preview-img-default-dimension': false
    };
    this._setPreviewPhotoDataStyle={
      'max-height': this._previewPhotoDimenPercentage+'%',
      'max-width': this._previewPhotoDimenPercentage+'%'
    };
  }
  /*
   *  simply back to best-fit 100% max-width and max-height
   */
  private bestFitPreviewPhotoDimen() {
    this._previewPhotoDimenPercentage=100;
    this._setPreviewPhotoDataCss={
      'photo-picker-set-selection-preview-img-default-dimension': true
    };
    this._setPreviewPhotoDataStyle={};
  }
  /*
   *  check if max max-width has been accomplished
   */
  private _canIncreasePreviewDataDimenPercentage() {
    let _w:number=this._element.nativeElement.querySelector('#imgPreviewData').width;
    if (_w==this._previousPreviewPhotoDimenPercentage) {
      return false;
    } else {
      this._previousPreviewPhotoDimenPercentage=_w;
      return true;
    }
  }


}
