import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrl: './product-item-detail.component.css'
})
export class ProductItemDetailComponent implements OnInit {
  id: string | null = null;
  product: Product | null = null;

  constructor(private route: ActivatedRoute, private productService: ProductService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id === null) {
      throw new Error('Product ID not found');
    }
    this.productService.getProduct(this.id).subscribe({
      next: (product: Product) => {
        this.product = product;
      },
      error: (err: Error) => {
        console.error(err);
      }
    })
  }
}
