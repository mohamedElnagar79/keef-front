import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProductsService } from '../adminServices/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any = [];
  constructor(
    public ProductsServ: ProductsService,
    private root: Router,
    public router: Router
  ) {}
  showMore(id: number) {
    this.router.navigateByUrl(`/admin/productInfo/${id}`);
    console.log(id);
  }
  ngOnInit(): void {
    this.ProductsServ.getProducts().subscribe((data) => {
      console.log('data', this.products);
      this.products = data;
    }),
      (e: Error) => {
        console.log(e);
      };
  }
}
