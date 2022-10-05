import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Products } from 'src/app/_models/products';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss'],
})
export class ProductsCardComponent implements OnInit {
  allProducts: Products[] = [];
  constructor(
    private productsSer: ProductsService,
    private ac: ActivatedRoute,
    public router: Router,
    private root: Router
  ) {}

  ngOnInit(): void {
    this.productsSer.getProducts().subscribe((data) => {
      this.allProducts = data;
      console.log('data', this.allProducts);
      console.log('===> ', this.allProducts[0].productInfoId[0].images[0]);
    });
  }
}
