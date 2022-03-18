import { Component, OnInit } from '@angular/core';
import {Bank} from "../bank";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BankService} from "../bank.service";

@Component({
  selector: 'app-bank-edit',
  templateUrl: './bank-edit.component.html',
  styleUrls: ['./bank-edit.component.css']
})
export class BankEditComponent implements OnInit {
  id!: string;
  bank!: Bank;

  form!: FormGroup;
  constructor(
    public bankService: BankService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bankService.find(this.id).subscribe((data: Bank) => {
      this.bank = data;
    });


    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      acronym: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      contact: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      website: new FormControl('', [Validators.required]),
    });
  }
    get f(){

      return this.form.controls;

    }


    submit(){

      console.log(this.form.value);

      this.bankService.update(this.id, this.form.value).subscribe((res:any) => {

        console.log('Bank updated successfully!');

        this.router.navigateByUrl('bank/index');

      })

    }
  }


