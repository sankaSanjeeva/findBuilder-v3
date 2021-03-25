import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorHandlerInterceptor, AuthorizationInterceptor } from './interceptors/index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true },
  ]
})
export class CoreModule { }
