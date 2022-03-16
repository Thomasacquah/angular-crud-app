import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BankIndexComponent } from './bank/bank-index/bank-index.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import {BankModule} from "./bank/bank.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    BankIndexComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BankModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
