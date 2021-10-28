import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  // intercept http calls and manipulate http header with auth token
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);
    // access the token from the storage
    const bearerToken = localStorage.getItem('authToken');

    console.log(bearerToken);
    // clone the req, in order to modify req header
    request = request.clone({ // and then, inside the cloned req, attach the token
      setHeaders: {
        Authorization: 'Bearer ' + bearerToken
      }
    });

    console.log(request);
    return next.handle(request);
  }
}
