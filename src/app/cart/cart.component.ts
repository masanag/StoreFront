import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/cart-item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  fullName: string = '';
  address: string = '';
  cardNumber: string = '';
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService, private router: Router) {
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart().items;
  }

  totalPrice(): number {
    return this.cartService.getCart().totalPrice;
  }

  submitOrder(): void {
    console.log('Order submitted');
    console.log('Full Name: ' + this.fullName);
    console.log('Address: ' + this.address);
    console.log('Card Number: ' + this.cardNumber);
    this.router.navigate(['/confirmation']);
  }
}
