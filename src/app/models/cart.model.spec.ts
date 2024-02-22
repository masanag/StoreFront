import { Cart } from './cart.model';
import { Product } from './product.model';

describe('Cart', () => {
  let cart: Cart;
  let product: Product;

  beforeEach(() => {
    cart = new Cart();
    product = new Product();
    product.id = 1;
    product.price = 100;
  });

  it('should add new item to the cart', () => {
    cart.addItem(product, 1);
    expect(cart.items.length).toBe(1);
    expect(cart.items[0].product.id).toBe(product.id);
    expect(cart.items[0].quantity).toBe(1);
  });

  it('should increase quantity of existing item in the cart', () => {
    cart.addItem(product, 1);
    cart.addItem(product, 2);
    expect(cart.items.length).toBe(1);
    expect(cart.items[0].quantity).toBe(3);
  });

  it('should remove item from the cart', () => {
    cart.addItem(product, 1);
    cart.removeItem(product);
    expect(cart.items.length).toBe(0);
  });

  it('should calculate total price of the cart', () => {
    cart.addItem(product, 2);
    expect(cart.totalPrice).toBe(200);
  });
});