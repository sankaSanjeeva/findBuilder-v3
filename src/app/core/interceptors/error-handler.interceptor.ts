import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // if (error.status === 401) {
        //   // auto logout if 401 response returned from api
        //   this.authenticationService.logout();
        //   location.reload(true);
        // }
        console.error("Error from ErrorHandlerInterceptor", error);
        return throwError(error);
      })
    );
  }
}
