import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.css'
})
export class ProductListItemComponent {
  selectedQuantity: number = 1;
  @Input() product: Product;

  constructor(private cartService: CartService) {
    this.product = new Product();
  }

  addToCart(product: Product, quantity: number) {
    this.selectedQuantity = 1;
    this.cartService.addToCart(product, quantity);
  }
}
