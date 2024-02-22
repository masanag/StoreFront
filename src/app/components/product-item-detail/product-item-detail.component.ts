import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrl: './product-item-detail.component.css',
})
export class ProductItemDetailComponent implements OnInit {
  id: string | null = null;
  product: Product | null = null;
  selectedQuantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id === null) {
      throw new Error('Product ID not found');
    }
    this.productService.getProduct(parseInt(this.id)).subscribe({
      next: (product: Product) => {
        this.product = product;
      },
      error: (err: Error) => {
        console.error(err);
      },
    });
  }

  addToCart(): void {
    if (this.product === null) {
      return;
    }
    this.cartService.addToCart(this.product, this.selectedQuantity);
    this.toastr.success(
      'Added ' + this.selectedQuantity + ' ' + this.product.name + ' to cart',
    );
  }
}
