import { Injectable } from '@angular/core';
import { Cart } from '../models/cart.model';
import { Product } from '../models/product.model';
import { CartRepository } from '../repositories/cart.repository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new Cart();

  constructor(private repository: CartRepository) { }

  addToCart(product: Product, quantity: number) {
    this.cart.addItem(product, quantity);
  }

  getCart(): Cart {
    return this.cart;
  }

  clearCart() {
    this.cart = new Cart();
  }

  completeOrder() :Observable<any>{
    return this.repository.completeOrder();
  }
}
