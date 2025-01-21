import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { UserListComponent } from './user-list.component';
import { UsersRoutingModule } from '../users-routing.module';



@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    UsersRoutingModule
  ]
})
export class UserListModule { }
