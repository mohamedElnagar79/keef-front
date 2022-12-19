import { Component, OnInit, ViewChild } from '@angular/core';
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
  loading: boolean = true;

  constructor(
    private productsSer: ProductsService,
    private ac: ActivatedRoute,
    public router: Router,
    private root: Router
  ) {}

  getProductInfo(id: number) {
    this.router.navigateByUrl(`productInfo/${id}`);
  }
  changeImg(e: any, cardImg: any) {
    e.target.src = cardImg;
  }

  ngOnInit(): void {
    this.productsSer.getProducts().subscribe((data) => {
      this.allProducts = data;
      this.loading = false;
      console.log('data', data);
    });
  }
}
