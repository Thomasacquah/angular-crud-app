import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import {BankModule} from "./bank/bank.module";
import {RouterModule} from "@angular/router";
import {BankService} from "./bank/bank.service";
import {HttpClientModule} from "@angular/common/http";
import {AppService} from "./app.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BankModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    BankService,
    AppService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
