import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css',
})
export class ConfirmationComponent implements OnInit{
  user: User | undefined;
  errorMessage: string | null =  null;
  orderTotalPrice: number | undefined;
  userName: string | undefined;

  constructor(
    private cartService: CartService,
    private userService: UserService,
    private router: Router) {}
  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.orderTotalPrice = this.cartService.getCart().totalPrice;
    this.userName = this.user?.fullName;

    this.cartService.completeOrder().subscribe({
      next: (response) => {
        console.log(response);
        this.errorMessage = 'Error submitting order: ';
        this.cartService.clearCart();
        this.userService.clearUser();
      },
      error: (error) => {
        console.error('Error submitting order: ' + error);
        this.errorMessage = 'Error submitting order: ' + error;
      }
    });

    console.log('Order submitted');
    console.log('Total Price: ' + this.totalPrice());
  }

  totalPrice(): number {
    return this.cartService.getCart().totalPrice;
  }

  goToProductList(): void {
    this.router.navigate(['/']); // Navigate to the product list page
  }
}
