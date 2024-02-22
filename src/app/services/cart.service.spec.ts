import { TestBed } from '@angular/core/testing';
import { CartService } from './cart.service';
import { Observable, of } from 'rxjs';
import { CartRepository, OrderResponse } from '../repositories/cart.repository';
import { Product } from '../models/product.model';

class MockCartRepository {
  completeOrder(): Observable<OrderResponse> {
    return of({ status: 200, message: 'Order submitted' });
  }
}

describe('CartService', () => {
  let service: CartService;
  let mockProduct: Product;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: CartRepository, useClass: MockCartRepository }],
    });

    service = TestBed.inject(CartService);

    mockProduct = {
      id: 1,
      name: 'Test Product',
      price: 100,
      url: 'http://test.com',
      description: 'Test description',
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add item to the cart', (done) => {
    service.addToCart(mockProduct, 1);
    service.getCartItems().subscribe((items) => {
      expect(items.length).toBe(1);
      expect(items[0].product).toEqual(mockProduct);
      expect(items[0].quantity).toBe(1);
      done()
    });
  });

  it('should remove item from the cart', (done) => {
    service.addToCart(mockProduct, 1);
    service.removeFromCart(mockProduct);
    service.getCartItems().subscribe((items) => {
      expect(items.length).toBe(0);
      done();
    });
  })

  it('should get the cart', () => {
    const cart = service.getCart();
    expect(cart).toBeDefined();
  });

  it('should clear the cart', (done) => {
    service.addToCart(mockProduct, 1);
    service.clearCart();
    service.getCartItems().subscribe((items) => {
      expect(items.length).toBe(0);
      done();
    });
  })

  it('should complete the order', (done) => {
    service.completeOrder().subscribe((response) => {
      expect(response.status).toBe(200);
      expect(response.message).toBe('Order submitted');
      done();
    });
  });
});
