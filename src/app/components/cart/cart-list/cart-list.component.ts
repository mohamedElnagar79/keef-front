import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/_models/order';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  currentOrders: any = [];
  totalPrice: number = 0;
  order: Order = {
    user: 1,
    city: '',
    street: '',
    buildingNumber: '',
    floor: 0,
    apartment: 0,
    products: [0],
    productInfo: [{}],
    notes: '',
  };
  constructor(
    private cartSer: CartService,
    private orderSer: OrderService,
    public router: Router
  ) {}
  // delete current ordecr from cart
  delOrderFromCart(i: number) {
    this.cartSer.delOrderFromCart(i);
    this.totalPrice = 0;
    for (let i = 0; i <= this.cartSer.cartOrders.length - 1; i++) {
      this.totalPrice += this.currentOrders[i].productInfo.price;
    }
    // console.log('cart now====>', this.cartSer.cartOrders);
  }
  // create order

  addOrder() {
    console.log('cart now', this.cartSer.cartOrders);
    this.order.products.pop();
    this.order.productInfo.pop();
    for (let j = 0; j < this.cartSer.cartOrders.length; j++) {
      this.order.products.push(this.cartSer.cartOrders[j].product);
      this.order.productInfo.push(this.cartSer.cartOrders[j].productInfo);
    }
    this.orderSer.addservice(this.order).subscribe(
      (data) => {
        console.log('added', data);
        this.cartSer.cartOrders = [];
        this.currentOrders = [];
        this.router.navigateByUrl(`userOrders/${2}`);
      },
      (e) => {
        console.log('error ', e);
      }
    );
    console.log('order now', this.order);
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
