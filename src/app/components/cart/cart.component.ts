import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../models/product.model';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  fullName: string = '';
  address: string = '';
  cardNumber: string = '';
  cartItems: CartItem[] = [];

  private cartItemsSubscription: Subscription = new Subscription();

  constructor(
    private cartService: CartService,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
    });
  }

  totalPrice(): number {
    return parseFloat(this.cartService.getCart().totalPrice.toFixed(2));
  }

  submitOrder(): void {
    // TODO: Delete console.log throughout the code
    console.log('Order submitted');
    console.log('Full Name: ' + this.fullName);
    console.log('Address: ' + this.address);
    console.log('Card Number: ' + this.cardNumber);
    this.userService.setUser({
      fullName: this.fullName,
      address: this.address,
    });
    this.router.navigate(['/confirmation']);
  }

  onQuantityChanged(event: { item: CartItem; quantity: number }) {
    console.log(
      'Quantity of item ' +
        event.item.product.name +
        ' changed to ' +
        event.quantity,
    );
    this.toastr.success(
      'Quantity of item ' +
        event.item.product.name +
        ' changed to ' +
        event.quantity,
    );
  }

  onItemDeleted(event: Product) {
    console.log('Removing item ' + event.name + ' from cart');
    this.toastr.success('Removed ' + event.name + ' from cart');
    this.cartService.removeFromCart(event);
  }
}
