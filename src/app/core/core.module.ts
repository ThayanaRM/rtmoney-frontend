import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';


import { ToastModule } from 'primeng/toast';
import { NotAuthorizedComponent } from './not-authorized.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { ErrorHandlerService } from './error-handler.service';


@NgModule({
  declarations: [
    NotAuthorizedComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    ConfirmDialogModule
  ],
  exports: [
    ToastModule,
    ConfirmDialogModule
  ],
  providers: [
    MessageService,
    ErrorHandlerService,
    ConfirmationService
  ]
})
export class CoreModule { }
