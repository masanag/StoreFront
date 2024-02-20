import { Injectable } from '@angular/core';
import { Cart } from '../models/cart.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new Cart();

  addToCart(product: Product, quantity: number) {
    this.cart.addItem(product, quantity);
  }

  getCart(): Cart {
    return this.cart;
  }

  clearCart() {
    this.cart = new Cart();
  }

  constructor() { }
}
