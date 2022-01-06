import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {NbButtonModule, NbCardModule, NbLayoutModule, NbThemeModule} from "@nebular/theme";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NbCardModule,
    NbButtonModule,
    NbThemeModule.forRoot(),
    RouterModule.forRoot([]),
    NbLayoutModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
