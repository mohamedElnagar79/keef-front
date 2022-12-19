import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../_models/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  url: string = ' http://localhost:8081/';
  constructor(private http: HttpClient) {}
  addservice(object: Order) {
    return this.http.post<Order>(this.url + 'order', object);
  }
  getUserOrders(id: number) {
    return this.http.get<[]>(this.url + 'userOrders/' + `${id}`);
  }

  cancelOrder(id: number) {
    return this.http.delete(this.url + 'order/' + `${id}`);
  }
}
