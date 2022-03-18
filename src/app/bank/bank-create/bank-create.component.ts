import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BankService} from "../bank.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-bank-create',
  templateUrl: './bank-create.component.html',
  styleUrls: ['./bank-create.component.css']
})
export class BankCreateComponent implements OnInit {
  form!: FormGroup;
  constructor(
    public bankService: BankService,
    private router: Router,
  ) { }

  ngOnInit(): void {
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

    this.bankService.create(this.form.value).subscribe((res:any) => {

      console.log('Bank created successfully!');

      this.router.navigateByUrl('bank/index');

    })

  }

}
