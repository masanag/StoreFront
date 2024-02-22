import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private toastr: ToastrService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
    console.log('Product List Component initialized');
    console.log(this.products);
  }

  addToCart(product: Product, quantity: number) {
    this.cartService.addToCart(product, quantity);
    this.toastr.success('Added ' + quantity + ' ' + product.name + ' to cart');
  }

  navigateToProductDetails(productId: number) {
    console.log('Navigating to product details for product id: ' + productId);
    this.router.navigate(['/products', productId]);
  }
}
