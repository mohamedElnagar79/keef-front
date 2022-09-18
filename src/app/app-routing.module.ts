import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/home.module').then((res) => res.HomeModule),
  },
  {
    path: 'signUp',
    loadChildren: () =>
      import('./core/sign-up/sign-up.module').then((res) => res.SignUpModule),
  },
  {
    path: 'adminSignUp',
    loadChildren: () =>
      import('./core/admin-sign-up/admin-sign-up.module').then(
        (res) => res.AdminSignUpModule
      ),
  },
  {
    path: 'signIn',
    loadChildren: () =>
      import('./core/sign-in/sign-in.module').then((res) => res.SignInModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
