import { Injectable } from '@angular/core';
import { ProductRepository } from '../repositories/product.repository';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private repository: ProductRepository) {}

  getProducts(): Observable<Product[]> {
    return this.repository.getProducts();
  }
}
