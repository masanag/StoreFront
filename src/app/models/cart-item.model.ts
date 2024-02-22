import { Product } from './product.model';

export class CartItem {
  product: Product = new Product();
  quantity: number = 0;

  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = Number(quantity);
  }
}
