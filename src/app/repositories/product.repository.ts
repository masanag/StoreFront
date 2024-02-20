// repositories/product.repository.ts
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { Injectable } from '@angular/core'; // Import the Injectable decorator

export abstract class ProductRepository {
  abstract getProducts(): Observable<Product[]>;
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
}

@Injectable({
  providedIn: 'root'
})
export class ProductJsonRepository extends ProductRepository {
  private dataUrl = 'assets/data.json';  // JSON data URL

  constructor(private http: HttpClient) {
    super();
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataUrl);
  }
}