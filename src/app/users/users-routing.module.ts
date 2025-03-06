import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { AuthGuard } from '../auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
  {
    path: 'list',
    component: UserListComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN']}
  },
  {
    path: 'create',
    component: UserFormComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN']}
  },
  {
    path: ':userId',
    component: UserFormComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN']}

  },
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class UsersRoutingModule { }
