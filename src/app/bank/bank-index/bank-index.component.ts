import { Component, OnInit } from '@angular/core';
import {BankService} from "../bank.service";

@Component({
  selector: 'app-bank-index',
  templateUrl: './bank-index.component.html',
  styleUrls: ['./bank-index.component.css']
})
export class BankIndexComponent implements OnInit {
  banks: any = [];
  constructor(public bankService: BankService) { }

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

}
