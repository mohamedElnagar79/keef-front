import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Products } from 'src/app/_models/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productInfo: Products = {
    _id: 0,
    name: '',
    category: '',
    gender: '',
    sale: true,
    salePrice: 0,
    price: 0,
    productInfoId: [],
  };
  id: number = 0;
  loading: boolean = true;
  constructor(
    public productInfoSer: ProductsService,
    private ac: ActivatedRoute,
    public router: Router,
    private root: Router
  ) {}

  getColorItems(colorId: number) {
    console.log('clicked', colorId);
  }

  ngOnInit(): void {
    this.id = this.ac.snapshot.params['id'];
    this.productInfoSer.getProductById(this.id).subscribe((data) => {
      console.log('product info data====>', data);
      this.productInfo = data;
      this.loading = false;
    });
  }
}
