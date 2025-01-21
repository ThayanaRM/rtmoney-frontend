import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
     UsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
