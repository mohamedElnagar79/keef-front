import { Component, OnChanges, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  currentOrders: any = [];
  totalPrice: number = 0;
  constructor(private cartSer: CartService) {}
  delOrderFromCart(i: number) {
    this.cartSer.delOrderFromCart(i);
    this.totalPrice = 0;
    for (let i = 0; i <= this.cartSer.cartOrders.length - 1; i++) {
      this.totalPrice += this.currentOrders[i].productInfo.price;
    }
    // console.log('cart now====>', this.cartSer.cartOrders);
  }
  ngOnInit(): void {
    if (this.cartSer.cartOrders.length >= 1) {
      this.currentOrders = this.cartSer.cartOrders;
      for (let i = 0; i <= this.cartSer.cartOrders.length - 1; i++) {
        this.totalPrice += this.currentOrders[i].productInfo.price;
      }
    }
  }
}
