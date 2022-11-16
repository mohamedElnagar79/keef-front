export class CartOrder {
  constructor(
    public product: number,
    public productInfo: {
      size: string;
      productInfoId: number;
      price: number;
    },
    public name: string,
    public colorImg: string,
    public color: string
  ) {}
}
