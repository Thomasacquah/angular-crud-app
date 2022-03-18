import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankRoutingModule } from './bank-routing.module';
import { BankComponent } from './bank.component';
import { BankEditComponent } from './bank-edit/bank-edit.component';
import { BankShowComponent } from './bank-show/bank-show.component';
import { BankCreateComponent } from './bank-create/bank-create.component';
import {RouterModule} from "@angular/router";
import {BankIndexComponent} from "./bank-index/bank-index.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    BankComponent,
    BankIndexComponent,
    BankEditComponent,
    BankShowComponent,
    BankCreateComponent
  ],
  imports: [
    CommonModule,
    BankRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class BankModule { }
