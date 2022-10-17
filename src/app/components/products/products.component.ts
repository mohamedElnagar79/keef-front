import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('preview') img: any;
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
  activeButton: string = '';
  activeSize: string = '';

  constructor(
    public productInfoSer: ProductsService,
    public productByColorSer: ProductInfoService,
    private ac: ActivatedRoute,
    public router: Router,
    private root: Router
  ) {}
  getColorItems(colorId: number) {
    this.productByColorSer.getProductInfoById(colorId).subscribe((data) => {
      console.log('product color data====>', data);
      this.productByColors = data;
    });
  }
  setActive(buttonName: string) {
    this.activeButton = buttonName;
  }
  isActive(buttonName: string) {
    return this.activeButton === buttonName;
  }
  setActiveSize(buttonName: string) {
    return (this.activeSize = buttonName);
  }
  isActiveSize(buttonName: string) {
    return (
      this.activeSize === buttonName &&
      (this.productByColors.large ||
        this.productByColors.medium ||
        this.productByColors.xlarge) !== 0
    );
  }
  openImg(img: string) {
    this.img.nativeElement.src = img;
  }
  ngOnInit(): void {
    this.id = this.ac.snapshot.params['id'];
    this.productInfoSer.getProductById(this.id).subscribe((data) => {
      console.log('product info data====>', data);
      this.productInfo = data;
      this.loading = false;
      this.intialId = data.productInfoId[0]._id;
      this.activeButton = data.productInfoId[0].colors;
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
