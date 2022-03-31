import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public storedToken: any;
  private apiURL = "http://localhost:8080";
  public redirectUrl: any;
  constructor(private httpClient: HttpClient, private router: Router) {
    this.storedToken = localStorage.getItem('token');
  }


  login(credentials: any) {
    const headers = new HttpHeaders({'Accept':'application/json'});
    return this.httpClient.post<any>( this.apiURL + '/api/login', credentials, {headers})
  }

  /**
   * get curentUser
   */
  curentUser() {
    return this.httpClient.get(this.apiURL+'authenticationToken');
  }

  isLoggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  getAuthorizationToken() {
    const currentUser = JSON.parse(this.storedToken);
    return currentUser.token;
  }

  /**
   * Logout
   */
  logout() {
    return this.httpClient.post(this.apiURL + '/api/logout',{});
  }

  /**
   * The client authentication method
   */
  clientAuthentication() {
    const url = this.apiURL + 'api/validate';
    let reqHeader = new HttpHeaders();
    reqHeader = reqHeader.append('X-Auth-Token', '' + this.storedToken);
    return this.httpClient.post(url, {}, {headers: reqHeader});
  }
}
