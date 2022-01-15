import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {NbLayoutModule, NbThemeModule} from "@nebular/theme";
import {RouterModule} from "@angular/router";
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RoutingsModule} from "./routings/routings.module";

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    NbLayoutModule,
    NbThemeModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingsModule,
    RoutingsModule


  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
