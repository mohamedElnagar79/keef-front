import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductInfoService } from 'src/app/services/productInfo.sevice';
import { ProductsService } from 'src/app/services/products.service';
import { ProductInfo } from 'src/app/_models/product-info';
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
  intialId: number = 0;

  productByColors: ProductInfo = {
    _id: 0,
    colors: '',
    images: [],
    medium: 0,
    large: 0,
    xlarge: 0,
  };
  id: number = 0;
  loading: boolean = true;
  clicked: boolean = false;
  constructor(
    public productInfoSer: ProductsService,
    public productByColorSer: ProductInfoService,
    private ac: ActivatedRoute,
    public router: Router,
    private root: Router
  ) {}
  getColorItems(colorId: number) {
    console.log('clicked', colorId);
    // console.log("event>>>",e.target as HTMLButtonElement)
    if(this.clicked)this.clicked=false;
    else this.clicked=true
    this.productByColorSer.getProductInfoById(colorId).subscribe((data) => {
      console.log('product color data====>', data);
      this.productByColors = data;
    });
  }
  sizeClick(clicked:boolean){
    if(clicked){clicked=false}
    else{clicked=true}
  }
  ngOnInit(): void {
    this.id = this.ac.snapshot.params['id'];
    this.productInfoSer.getProductById(this.id).subscribe((data) => {
      console.log('product info data====>', data);
      this.productInfo = data;
      this.loading = false;
      this.intialId = data.productInfoId[0]._id;
      // initial color
      this.productByColorSer
        .getProductInfoById(this.intialId)
        .subscribe((data) => {
          console.log('product color data====>', data);
          this.productByColors = data;
        });
    });
  }
}
