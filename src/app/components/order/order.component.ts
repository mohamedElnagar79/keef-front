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
  // to cancel order
  cancelOrder(id: number, index: number) {
    console.log('id>>>>>', id, 'index>>>>', index);
    if (window.confirm('Are sure you want to cancel this order ?')) {
      this.userOrders.splice(index, 1);
      this.orderSer.cancelOrder(id).subscribe((data) => {
        console.log('deleted ', data);
        console.log('now ', this.userOrders);
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
