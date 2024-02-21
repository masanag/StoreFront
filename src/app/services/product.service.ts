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

  getProduct(id: string): Observable<Product> {
    const idNumber = parseInt(id);
    return this.repository.getProduct(idNumber).pipe(
      map(product => {
        if (product) {
          return product;
        } else {
          throw new Error('Product not found');
        }
      }),
      catchError((err: Error) => {
        console.error(err);
        throw err;
      })
    );
  }
}
