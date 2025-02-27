import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';


const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
  {
    path: 'list',
    component: UserListComponent,
  },
  {
    path: 'create',
    component: UserFormComponent,
  },
  {
    path: ':userId',
    component: UserFormComponent,
    data: { roles: ['ROLE_ADMIN']}
  },
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class UsersRoutingModule { }
