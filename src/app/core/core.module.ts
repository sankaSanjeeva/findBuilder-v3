import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';
import { TranslocoRootModule } from './transloco/transloco-root.module';
import { ErrorHandlerInterceptor, AuthorizationInterceptor } from './interceptors/index';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslocoRootModule
  ],
  exports: [HeaderComponent, CommonModule, AppRoutingModule, FormsModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true },
  ]
})
export class CoreModule { }
