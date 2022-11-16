import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartListComponent } from './cart-list/cart-list.component';
const routes: Routes = [
  {
    path: '',
    component: CartListComponent,
    data: { title: 'cartList' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
