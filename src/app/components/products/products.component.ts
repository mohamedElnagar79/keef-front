import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductInfoService } from '../../services/productInfo.sevice';
import { ProductsService } from '../../services/products.service';
import { CartOrder } from '../../_models/cart-order';
import { ProductInfo } from '../../_models/product-info';
import { Products } from '../../_models/products';

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
  totalPrice: number = 0;
  orderCounter: number = 1;
  sizeFlag: boolean = false;
  productByColors: ProductInfo = {
    _id: 0,
    colors: '',
    images: [],
    medium: 0,
    large: 0,
    xlarge: 0,
  };
  id: number = Number(this.ac.snapshot.params['id']);
  loading: boolean = true;
  activeButton: string = '';
  activeSize: string = '';
  activeImgId: number = 0;
  cartOrder: CartOrder = new CartOrder(
    this.id,
    {
      productInfoId: 0,
      size: '',
      price: 0,
    },
    this.productInfo.name,
    '',
    ''
  );

  // productInfoId: 0,
  //       size: 'large',
  //       price: 0,
  constructor(
    public productInfoSer: ProductsService,
    public productByColorSer: ProductInfoService,
    private ac: ActivatedRoute,
    public router: Router,
    private root: Router,
    public cartser: CartService
  ) {}
  getColorItems(colorId: number) {
    this.productByColorSer.getProductInfoById(colorId).subscribe((data) => {
      this.productByColors = data;
      console.log('ddddd', data);
      this.cartOrder.productInfo.productInfoId = data._id;
      this.cartOrder.color = data.colors;
      this.cartOrder.colorImg = data.images[0];
    });
  }
  setActive(buttonName: string) {
    this.activeButton = buttonName;
  }
  isActive(buttonName: string) {
    return this.activeButton === buttonName;
  }
  isImgActive(imageId: number) {
    return this.activeImgId === imageId;
  }
  setImageActive(imageId: number) {
    this.activeImgId = imageId;
  }
  setActiveSize(buttonName: string) {
    this.cartOrder.productInfo.size = buttonName;
    this.sizeFlag = false;
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
  // on add order
  //  increase order
  increaseOrder() {
    if (this.orderCounter < 5) {
      this.totalPrice += this.productInfo.price;
      this.orderCounter += 1;
    }
  }
  // decreaseOrder
  decreaseOrder() {
    if (this.totalPrice > this.productInfo.price) {
      this.totalPrice -= this.productInfo.price;
      this.orderCounter -= 1;
    }
  }

  // add order to cart
  addToCart() {
    if (this.cartser.cartOrders.length < 20) {
      if (this.cartOrder.productInfo.size) {
        console.log('current product in order ', this.cartOrder);
        this.cartOrder.name = this.productInfo.name;
        this.cartOrder.productInfo.price = this.productInfo.price;
        for (let i = 0; i < this.orderCounter; i++) {
          this.cartser.cartOrders.push(this.cartOrder);
        }
        // console.log(' ===> ', this.cartser.cartOrders);
        // console.log('length ===> ', this.cartser.cartOrders.length);
        this.sizeFlag = false;
      } else {
        this.sizeFlag = true;
        console.log('no size', this.sizeFlag);
      }
    }
  }
  ngOnInit(): void {
    this.id = this.ac.snapshot.params['id'];
    this.productInfoSer.getProductById(this.id).subscribe((data) => {
      console.log('product info data====>', data);
      this.productInfo = data;
      this.loading = false;
      this.intialId = data.productInfoId[0]._id;
      this.activeButton = data.productInfoId[0].colors;
      this.totalPrice = this.productInfo.price;

      // initial color
      this.productByColorSer
        .getProductInfoById(this.intialId)
        .subscribe((data) => {
          this.productByColors = data;
          this.cartOrder.productInfo.productInfoId = data._id;
          this.cartOrder.color = data.colors;
          this.cartOrder.colorImg = data.images[0];
        });
    });
  }
}
