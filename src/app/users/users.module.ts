import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';
import { SharedModule } from '../shared/shared.module';
import { UserFormComponent } from './user-form/user-form.component';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [
     UsersComponent,
     UserListComponent,
     UserFormComponent
  ],
  imports: [
  CommonModule,
  SharedModule,

  TableModule,
  FormsModule,
  ButtonModule,
  InputTextModule,
  MultiSelectModule,

  UsersRoutingModule
  ],
  providers: [
    UserService
  ],
})
export class UsersModule { }
