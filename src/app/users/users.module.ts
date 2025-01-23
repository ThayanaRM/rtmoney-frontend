import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';



@NgModule({
  declarations: [
     UsersComponent,
     UserListComponent
  ],
  imports: [
  CommonModule,

  TableModule,

  UsersRoutingModule
  ]
})
export class UsersModule { }
