import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

class MockServiceRepository {
  getProducts(): Observable<Product[]>{
    return of([{id: 1, name: 'Test Product', price: 100, url: 'http://test.com', description: 'Test Description'}])
  }

  getProduct(id: number): Observable<Product> {
    if(id ===1) {
      return of({id: 1, name: 'Test Product', price: 100, url: 'http://test.com', description: 'Test Description'})
    } else {
      return of({id: 0, name: '', price: 0, url: '', description: ''});

    }
  }
}

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ProductService, useClass: MockServiceRepository }],
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get products', (done) => {
    service.getProducts().subscribe((products) => {
      expect(products.length).toBe(1);
      done();
    });
  })

  it('should get product by id', (done) => {
    service.getProduct(1).subscribe((product) => {
      expect(product.id).toBe(1);
      done();
    });
  })
});