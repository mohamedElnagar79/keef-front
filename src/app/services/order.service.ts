import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../_models/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  url: string = ' http://localhost:8081/order';
  constructor(private http: HttpClient) {}
  addservice(object: Order) {
    return this.http.post<Order>(this.url, object);
  }
}
