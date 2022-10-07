export class Products {
  constructor(
    public _id: number,
    public name: string,
    public category: string,
    public gender: string,
    public sale: boolean,
    public salePrice: number,
    public price: number,
    public productInfoId: any
  ) {}
}
