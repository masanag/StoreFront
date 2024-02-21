// repositories/product.repository.ts
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { Product } from '../models/product.model';
import { Injectable } from '@angular/core'; // Import the Injectable decorator

export abstract class ProductRepository {
  abstract getProducts(): Observable<Product[]>;
  abstract getProduct(id: number): Observable<Product>;
}

@Injectable({
  providedIn: 'root'
})
export class ProductApiRepository extends ProductRepository {
  private apiUrl = 'api/products';  // API URL

  constructor(private http: HttpClient) {
    super();
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProductJsonRepository extends ProductRepository {
  private productCache: Product[] = [];
  private dataUrl = 'assets/data.json';  // JSON data URL

  constructor(private http: HttpClient) {
    super();
  }

  getProducts(): Observable<Product[]> {
    if(this.productCache.length > 0) {
      return of(this.productCache);
    } else {
      return this.http.get<Product[]>(this.dataUrl).pipe(
        tap((products: Product[]) => this.productCache = products)
      )
    }
  }

  getProduct(id: number): Observable<Product> {
    if(this.productCache.length > 0) {
      const product = this.productCache.find(p => p.id === id);
      if(product) {
        return of(product);
      } else {
        throw new Error('Product not found');
      }
    } else {
      return this.getProducts().pipe(
        map((products: Product[]) => {
          const product = products.find(p => p.id === id)
          if(product) {
            return product;
          } else {
            throw new Error('Product not found');
          }
        }),
      );
    }
  }
}