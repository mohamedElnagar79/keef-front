import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url: string = ' http://localhost:8081/product/';
  constructor(private http: HttpClient) {}
  getProducts() {
    return this.http.get<[]>(this.url);
  }
  getProductsById(id: number) {
    return this.http.get<{}>(this.url + `${id}`);
  }
}
