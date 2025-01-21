import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('../app/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'users',
    loadChildren: () =>
      import('../app/users/users.module').then((m) => m.UsersModule)
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
