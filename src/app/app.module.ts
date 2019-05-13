import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {HeadbarComponent} from './components/headbar/headbar.component';
import {MainbarComponent} from './components/mainbar/mainbar.component';
import { TaskComponent } from './components/task/task.component';
import { FunwinComponent } from './components/funwin/funwin.component';
import { SystemComponent } from './components/system/system.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeadbarComponent,
    MainbarComponent,
    TaskComponent,
    FunwinComponent,
    SystemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
