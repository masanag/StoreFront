import { Injectable } from '@angular/core';
import { ProductRepository } from '../repositories/product.repository';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private repository: ProductRepository) {}

  getProducts(): Observable<Product[]> {
    return this.repository.getProducts();
  }

  getProduct(id: number): Observable<Product> {
    return this.repository.getProduct(id).pipe(
      map(product => {
        if (product) {
          return product;
        } else {
          throw new Error('Product not found');
        }
      }),
    );
  }
}
