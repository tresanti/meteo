import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //MODIFICO DA HTTP a HTTPS
    const newUrl ={urlWithParams:request.url.replace('http://', 'https://')};
    const  req = Object.assign(request,newUrl);
    //CONTROLLO I PARAMETRI E MODIFICO
    if(request.urlWithParams.includes('roma')){
      const params = {urlWithParams:request.url.replace('&q=roma','&q=Rome,it')};
      const req = Object.assign(request,params);
      next.handle(req);
    }
    return next.handle(req);
  }
}
