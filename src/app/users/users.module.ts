import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
     UsersComponent,
     UserListComponent
  ],
  imports: [
  CommonModule,
  SharedModule,

  TableModule,
  FormsModule,
  ButtonModule,
  InputTextModule,

  UsersRoutingModule
  ],
  providers: [UserService],
})
export class UsersModule { }
