import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TaskComponent} from "./components/task/task.component";
import {SystemComponent} from "./components/system/system.component";

const routes: Routes = [
  {path: "auth", loadChildren: "../auth/auth.module#AuthModule"},
  {
    path: "", component: SystemComponent, children: [
      {path: "task", component: TaskComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
