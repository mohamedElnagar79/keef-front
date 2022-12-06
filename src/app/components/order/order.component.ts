import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  userOrders: any = [];
  constructor(private orderSer: OrderService) {}
  cancelOrder(i: number) {
    if (window.confirm('Are sure you want to delete this item ?')) {
      this.userOrders.splice(i, 1);
      this.orderSer.cancelOrder(i).subscribe((data) => {
        console.log('deleted ', data);
      });
    }
  }
  ngOnInit(): void {
    this.orderSer.getUserOrders(1).subscribe((data) => {
      this.userOrders = data;
      console.log('userOrder', this.userOrders);
    });
  }
}
