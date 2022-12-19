import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

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
    canActivate: [AuthGuard],
  },
  {
    path: 'signIn',
    loadChildren: () =>
      import('./core/sign-in/sign-in.module').then((res) => res.SignInModule),
  },
  {
    path: 'productInfo/:id',
    loadChildren: () =>
      import('./components/products/products.module').then(
        (res) => res.ProductsModule
      ),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./components/cart/cart.module').then((res) => res.CartModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./components/cart/cart.module').then((res) => res.CartModule),
  },
  {
    path: 'userOrders/:id',
    loadChildren: () =>
      import('./components/order/order.module').then((res) => res.OrderModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((res) => res.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
