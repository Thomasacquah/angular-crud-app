import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankRoutingModule } from './bank-routing.module';
import { BankComponent } from './bank.component';
import { BankEditComponent } from './bank-edit/bank-edit.component';
import { BankShowComponent } from './bank-show/bank-show.component';
import { BankCreateComponent } from './bank-create/bank-create.component';


@NgModule({
  declarations: [
    BankComponent,
    BankEditComponent,
    BankShowComponent,
    BankCreateComponent
  ],
  imports: [
    CommonModule,
    BankRoutingModule
  ]
})
export class BankModule { }
