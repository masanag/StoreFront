import { CartItem } from './cart-item.model';
import { Product } from './product.model';

export class Cart {
  items: CartItem[] = [];

  get totalPrice(): number {
    return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  addItem(product: Product, quantity: number) {
    const foundItem = this.items.find(item => item.product.id === product.id);

    // TODO: Avoid string concatenation occurs in adding to cart
    if(foundItem) {
      foundItem.quantity += Number(quantity);
    } else {
      this.items.push(new CartItem(product, quantity));
    }
  }

  removeItem(product: Product) {
    this.items = this.items.filter(item => item.product.id !== product.id);
  }
}