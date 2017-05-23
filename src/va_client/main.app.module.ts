/**
 * This file is part of projectVA.
 *
 * projectVA is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * projectVA is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Foobar.  If not, see <http://www.gnu.org/licenses/>.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { HelloComponent }  from './component/playground/hello.component';
import { LabComponent }  from './component/core/lab.component';
import { LabHeaderComponent }  from './component/core/lab.header.component';

import { PlaygroundComponent }  from './component/core/playground.component';
import { PlaygroundSideMenuComponent } from './component/playground/side.menu.component';

import { PhotoPickerComponent } from './component/component/photopicker/photo.picker.component';
import { PhotoPickerPreviewWidget } from './component/component/photopicker/photo.picker.preview.widget';
import { PhotoPickerViewWidget } from './component/component/photopicker/photo.picker.view.widget';
import { FileUploadComponent } from './component/component/dialog/file.upload.component';
import { PhotoBigPreviewComponent } from './component/component/photopicker/photo.big.preview.dialogue';
import { MessageDlgComponent } from './component/component/dialog/message.dlg.component';
import { PhotoPickerSetLoadOrDeleteDlgComponent } from './component/component/photopicker/photo.picker.set.load.or.del.dlg';

import { CoreModelProvider } from './component/core/core.model.provider';
import { FileReaderServiceProvider, FileReaderService } from './component/core/file.reader';

import { DialogTestingComponent } from './component/component/testing/dlg/dialog.testing.component';
import { AccordionZeroComponent } from './component/component/testing/dlg/accordion.zero';
import { AccordionOneComponent } from './component/component/testing/dlg/accordion.one';
import { AccordionTwoComponent } from './component/component/testing/dlg/accordion.two';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'playground',
        component: PlaygroundComponent,
        children: [
          {
            path: '', /* default path */
            component: HelloComponent
          },
          {
            path: 'photo-picker',
            component: PhotoPickerComponent
          },
          {
            path: 'dialogs',
            component: DialogTestingComponent
          }
        ] /* end of "child" routes */
      }
    ])
  ],
  // [step] would need to declare the kinds of components (router etc)
  declarations: [
    HelloComponent,
    LabComponent, LabHeaderComponent,
    PlaygroundComponent, PlaygroundSideMenuComponent,
    PhotoPickerComponent, PhotoPickerPreviewWidget, PhotoPickerViewWidget,
    FileUploadComponent, PhotoBigPreviewComponent, MessageDlgComponent,
    PhotoPickerSetLoadOrDeleteDlgComponent,
    DialogTestingComponent, AccordionZeroComponent, AccordionOneComponent, AccordionTwoComponent
  ],
  // [step] if you want to have REAL singleton, you need to create your own Provider...
  providers: [
    CoreModelProvider,
    FileReaderServiceProvider
  ],
  bootstrap:    [ LabComponent ]
})
export class MainAppModule { }
