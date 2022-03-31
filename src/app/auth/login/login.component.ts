import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  private apiURL = "http://localhost:8080";
  error: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    public formBuilder: FormBuilder,
    private authService: AuthService,
  ) {
    this.loginForm = this.formBuilder.group({
      username : [''],
      password : [''],
    })
  }


  ngOnInit(): void {
  }



  onSubmit() {
    let formData: any = new FormData();
    formData.append("username",`${this.loginForm.value.username}`);
    formData.append("password",`${this.loginForm.value.password}`);

    const credentials = Object.fromEntries(formData.entries());
    localStorage.clear();
    const headers = new HttpHeaders({'Accept':'application/json'});
    return this.authService.login(credentials).subscribe((data: any) => {
      localStorage.setItem('token', data.access_token);
      this.router.navigateByUrl('/bank/index');

    },
    (err: HttpErrorResponse) => {
      if (err) {
        this.error = 'login.login_msg';
      }
    });
  }
}
