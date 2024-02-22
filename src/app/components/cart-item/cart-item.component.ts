import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cart-item.model';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  @Input() item: CartItem | undefined;
  @Output() quantityChanged = new EventEmitter<{
    item: CartItem;
    quantity: number;
  }>();
  @Output() itemDeleted = new EventEmitter<Product>();

  onQuantityChange(newQuantity: number) {
    if (this.item) {
      this.quantityChanged.emit({ item: this.item, quantity: newQuantity });
    }
  }

  onDeleteClick() {
    if (this.item) {
      this.itemDeleted.emit(this.item.product);
    }
  }
}
