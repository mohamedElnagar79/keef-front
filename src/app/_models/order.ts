export class Order {
  constructor(
    public user: number,
    public city: string,
    public street: string,
    public buildingNumber: string,
    public floor: number,
    public apartment: number,
    public products: [number],
    public productInfo: [{}],
    public notes?: string
  ) {}
}
