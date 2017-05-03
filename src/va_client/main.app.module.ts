import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { HelloComponent }  from './component/playground/hello.component';
import { LabComponent }  from './component/core/lab.component';
import { LabHeaderComponent }  from './component/core/lab.header.component';

import { PlaygroundComponent }  from './component/core/playground.component';
import { PlaygroundSideMenuComponent } from './component/playground/side.menu.component';

import { PhotoPickerComponent } from './component/component/photo.picker.component';
import { PhotoPickerPreviewWidget } from './component/component/photo.picker.preview.widget';
import { FileUploadComponent } from './component/component/file.upload.component';

import { CoreModelProvider } from './component/core/core.model.provider';
import { FileReaderServiceProvider, FileReaderService } from './component/core/file.reader';


@NgModule({
  imports:      [
    BrowserModule,
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
    PhotoPickerComponent, PhotoPickerPreviewWidget,
    FileUploadComponent
  ],
  // [step] if you want to have REAL singleton, you need to create your own Provider...
  providers: [
    CoreModelProvider,
    FileReaderServiceProvider
  ],
  bootstrap:    [ LabComponent ]
})
export class MainAppModule { }
