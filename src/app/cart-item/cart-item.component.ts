import { Component, Input } from '@angular/core';
import { CartItem } from '../models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  @Input() item: CartItem | undefined;

}
