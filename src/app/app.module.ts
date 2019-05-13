import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {HeadbarComponent} from './components/headbar/headbar.component';
import {MainbarComponent} from './components/mainbar/mainbar.component';
import {TaskComponent} from './components/task/task.component';
import {FunwinComponent} from './components/funwin/funwin.component';
import {SystemComponent} from './components/system/system.component';
import {AddTaskComponent} from './components/task/add-task/add-task.component';
import {EditTaskComponent} from './components/task/edit-task/edit-task.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppInterceptor} from "./shared/AppInterceptor";
import {TaskService} from "./services/task.service";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeadbarComponent,
    MainbarComponent,
    TaskComponent,
    FunwinComponent,
    SystemComponent,
    AddTaskComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TaskService,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AppInterceptor,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
