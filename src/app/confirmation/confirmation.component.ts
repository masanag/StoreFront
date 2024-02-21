// TODO: Create pretty confirmation template!
// TODO: Create User Service to get user information in confirmation page
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css',
})
export class ConfirmationComponent implements OnInit{
  errorMessage: string | null =  null;
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.completeOrder().subscribe({
      next: (response) => {
        console.log(response);
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
}
