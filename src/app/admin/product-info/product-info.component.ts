import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../adminServices/products.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent implements OnInit {
  id: number = this.ac.snapshot.params['id'];
  product: any = [];
  constructor(public ProductsSer: ProductsService, public ac: ActivatedRoute) {}

  ngOnInit(): void {
    this.ProductsSer.getProductsById(this.id).subscribe((data) => {
      console.log('data ', data);
      this.product = data;
    }),
      (error: any) => {
        console.log(error);
      };
  }
}
