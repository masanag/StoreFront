import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductJsonRepository } from './product.repository';
import { Product } from '../models/product.model';

describe('ProductJsonRepository', () => {
  let repository: ProductJsonRepository;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductJsonRepository]
    });

    repository = TestBed.inject(ProductJsonRepository);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify(); // Verify that no unmatched requests are outstanding
  });

  it('should get products', () => {
    const mockProducts: Product[] = [{ id: 1, name: 'Product 1', price: 100, url: 'product-1', description: 'Description 1'}];

    repository.getProducts().subscribe(products => {
      expect(products).toEqual(mockProducts);
    });

    const req = httpTestingController.expectOne('assets/data.json');
    expect(req.request.method).toEqual('GET');
    req.flush(mockProducts); // Provide mock data as the response
  });

  it('should get product by id', () => {
    const mockProduct: Product = { id: 1, name: 'Product 1', price: 100, url: 'product-1', description: 'Description 1'};

    repository.getProduct(1).subscribe(product => {
      expect(product).toEqual(mockProduct);
    });

    const req = httpTestingController.expectOne('assets/data.json');
    expect(req.request.method).toEqual('GET');
    req.flush([mockProduct]); // Provide mock data as the response
  });
});