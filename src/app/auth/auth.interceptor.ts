import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import {catchError, from, Observable, tap, throwError} from 'rxjs';
import {Router} from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService, private  router:Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem('token') != null) {
      req = req.clone({
        headers: req.headers.set('X-Auth-Token', ''+localStorage.getItem('token'))
      });
    } else if (localStorage.getItem('token') == null) {
      this.router.navigateByUrl('/login');
      return next.handle(req.clone());
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error.error);
      }),


    );
  }
}
