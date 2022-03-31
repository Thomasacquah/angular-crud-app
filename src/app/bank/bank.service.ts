import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Bank} from "./bank";
import {catchError, Observable, retry, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  private apiURL = "http://localhost:8080";

  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // HttpClient API get() method => Fetch banks list
  getBanks(): Observable<Bank> {
    return this.http
      .get<Bank>(this.apiURL + '/bank/index.json')
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API get() method => Fetch bank
  getBank(id: any): Observable<Bank> {
    return this.http
      .get<Bank>(this.apiURL + '/bank/show.' + id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API post() method => Create bank

 create(bank: any): Observable<Bank> {
    return this.http
      .post<Bank>(
        this.apiURL + 'bank/save',
        JSON.stringify(bank),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  find(id:string): Observable<any> {
    return this.http.get(this.apiURL + '/bank/edit/' + id + '.json', this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }
  // HttpClient API put() method => Update bank
  update(id: any, bank: any): Observable<Bank> {
    return this.http
      .put<Bank>(
        this.apiURL + '/bank/update/' + id,
        JSON.stringify(bank),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API delete() method => Delete bank
  deleteBank(id: any) {
    return this.http
      .delete<Bank>(this.apiURL + '/bank/delete/' + id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}

