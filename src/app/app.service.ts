import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  authenticated = false;

  constructor(private http: HttpClient) {
  }

  // authenticate(credentials: any, callback: any) {
  //
  //   const headers = new HttpHeaders(credentials ? {
  //     authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
  //   } : {});
  //
  //   this.http.get('http://localhost:8080/sbUser.json', {headers: headers}).subscribe(response => {
  //     if (response['username']) {
  //       this.authenticated = true;
  //     } else {
  //       this.authenticated = false;
  //     }
  //     return callback && callback();
  //   });

  // }
}
