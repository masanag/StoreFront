import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart().items;
  }

  totalPrice(): number {
    return this.cartService.getCart().totalPrice;
  }
}
