import { Component, OnInit } from '@angular/core';
import {BankService} from "../bank.service";
import {HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {AuthService} from "../../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-bank-index',
  templateUrl: './bank-index.component.html',
  styleUrls: ['./bank-index.component.css']
})
export class BankIndexComponent implements OnInit {
  banks: any = [];
  error: string = '';
  constructor(public bankService: BankService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loadBanks();
  }
  // Get employees list
  loadBanks() {
    return this.bankService.getBanks().subscribe((data: {}) => {
      this.banks = data;
    });
  }
  // Delete employee
  deleteBank(id: any) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.bankService.deleteBank(id).subscribe((data) => {
        this.loadBanks();
      });
    }
  }

  logout() {
    return this.authService.logout().subscribe((data: any) => {
        localStorage.clear();
        localStorage.setItem('isLoggedIn', 'false');
        this.router.navigateByUrl('/home');
      },
      (err: HttpErrorResponse) => {
        if (err) {
          this.error = 'logout error';
          console.error(this.error);
          console.error(err);
        }
      });
  }

}
