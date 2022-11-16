import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartRoutingModule } from './cart-routing.routes';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CartListComponent],
  imports: [CommonModule, CartRoutingModule, FormsModule],
})
export class CartModule {}
