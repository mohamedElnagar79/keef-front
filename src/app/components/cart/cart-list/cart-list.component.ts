import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  currentOrders: any = [];
  constructor(private cartSer: CartService) {}

  ngOnInit(): void {
    if (this.cartSer.cartOrders.length > 2) {
      this.currentOrders = this.cartSer.cartOrders;
      console.log('current ', this.currentOrders[0].productInfo[0]);
      console.log('cart', this.cartSer.cartOrders);
      // console.log('price', this.cartSer.cartOrders[0].productInfo[0].price);
    }
  }
}
