// TODO: Delete button in cart
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/cart-item.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private cartService: CartService, private router: Router, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart().items;
  }

  totalPrice(): number {
    return parseFloat(this.cartService.getCart().totalPrice.toFixed(2));
  }

  submitOrder(): void {
    console.log('Order submitted');
    console.log('Full Name: ' + this.fullName);
    console.log('Address: ' + this.address);
    console.log('Card Number: ' + this.cardNumber);
    this.router.navigate(['/confirmation']);
  }

  onQuantityChanged(event: { item: CartItem, quantity: number }) {
    console.log('Quantity of item ' + event.item.product.name + ' changed to ' + event.quantity);
    this.toastr.success('Quantity of item ' + event.item.product.name + ' changed to ' + event.quantity);

  }
}
