import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { HelloComponent }  from './component/playground/hello.component';
import { LabComponent }  from './component/core/lab.component';
import { LabHeaderComponent }  from './component/core/lab.header.component';

import { PlaygroundComponent }  from './component/core/playground.component';
import { PlaygroundSideMenuComponent } from './component/playground/side.menu.component';

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
          }
        ] /* end of "child" routes */
      }
    ])
  ],
  // [step] would need to declare the kinds of components (router etc)
  declarations: [
    HelloComponent,
    LabComponent, LabHeaderComponent,
    PlaygroundComponent, PlaygroundSideMenuComponent
  ],
  bootstrap:    [ LabComponent ]
})
export class MainAppModule { }