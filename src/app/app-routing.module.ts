import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth/auth.component";
import { LoginComponent } from "./auth/login/login.component";
import { NotAuthorizedComponent } from "./core/not-authorized.component";
import { PageNotFoundComponent } from "./core/page-not-found.component";

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
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'auth/login',
    component: LoginComponent,
  },
  {
    path: 'not-authorization',
    component: NotAuthorizedComponent
   },
   {
    path: 'page-not-found',
    component: PageNotFoundComponent
   },
   { path: '**',
     redirectTo: 'page-not-found'
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
