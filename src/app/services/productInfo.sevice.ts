import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductInfo } from '../_models/product-info';
@Injectable({
  providedIn: 'root',
})
export class ProductInfoService {
  url: string = ' http://localhost:8081/product-info/';
  constructor(private http: HttpClient) {}

  getProductInfoById(id: number) {
    return this.http.get<ProductInfo>(this.url + `${id}`);
  }
}
