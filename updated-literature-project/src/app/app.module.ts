import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {HttpClientModule} from "@angular/common/http";
import {CreateCiteComponent} from "./create-cite/create-cite.component";

@NgModule({
  declarations: [
    AppComponent,
    CreateCiteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, CreateCiteComponent]
})
export class AppModule { }
