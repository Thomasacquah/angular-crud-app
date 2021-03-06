import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {BankIndexComponent} from "./bank/bank-index/bank-index.component";
import {BankCreateComponent} from "./bank/bank-create/bank-create.component";
import {BankEditComponent} from "./bank/bank-edit/bank-edit.component";
import {BankShowComponent} from "./bank/bank-show/bank-show.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {
  AuthGuardService as AuthGuard
} from './auth/auth-guard.service';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'bank/index',
    component: BankIndexComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'bank/create',
    component: BankCreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'bank/edit/:id',
    component: BankEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'bank/show',
    component: BankShowComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  // { path: '**', redirectTo: 'home' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
