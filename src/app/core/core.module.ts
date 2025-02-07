import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfirmDialogModule
  ],
  exports: [
    ConfirmDialogModule
  ],
  providers: [
    ConfirmationService
  ]
})
export class CoreModule { }
