import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {AddEmployeeComponent} from "./add-employee/add-employee.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path:'', component: AppComponent,

    children:[
      {
        path:'edit/:id', component:AddEmployeeComponent
      },
      {
        path:'back', component:AppComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
