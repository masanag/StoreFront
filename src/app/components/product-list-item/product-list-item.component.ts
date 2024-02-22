import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.css'
})
export class ProductListItemComponent {
  selectedQuantity: number = 1;
  @Input() product: Product;
  @Output() addToCart = new EventEmitter<{ product: Product, quantity: number }>();
  @Output() productClicked = new EventEmitter<string>();

  constructor() {
    this.product = new Product();
  }

  onAddToCart(product: Product, quantity: number) {
    this.addToCart.emit({ product, quantity });
    this.selectedQuantity = 1;
  }

  onProductClick() {
    console.log('Product clicked');
  }
}