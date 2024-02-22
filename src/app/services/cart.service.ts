import { Injectable } from '@angular/core';
import { Cart } from '../models/cart.model';
import { Product } from '../models/product.model';
import { CartRepository, OrderResponse } from '../repositories/cart.repository';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = new Cart();
  private cartItems: BehaviorSubject<CartItem[]> = new BehaviorSubject<
    CartItem[]
  >([]);

  constructor(private repository: CartRepository) {}

  addToCart(product: Product, quantity: number) {
    this.cart.addItem(product, quantity);
    this.cartItems.next(this.cart.items);
  }

  removeFromCart(product: Product) {
    this.cart.removeItem(product);
    this.cartItems.next(this.cart.items);
  }

  getCart(): Cart {
    return this.cart;
  }

  getCartItems(): Observable<CartItem[]> {
    return this.cartItems.asObservable();
  }

  clearCart() {
    this.cart = new Cart();
    this.cartItems.next(this.cart.items);
  }

  completeOrder(): Observable<OrderResponse | never> {
    return this.repository.completeOrder();
  }
}
