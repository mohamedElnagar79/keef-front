import { Injectable } from '@angular/core';
import { Products } from '../_models/products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url: string = ' http://localhost:8081/product';
  constructor(private http: HttpClient) {}
  getProducts() {
    return this.http.get<Products[]>(this.url);
  }
}
