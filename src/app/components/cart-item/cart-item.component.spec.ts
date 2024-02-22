import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemComponent } from './cart-item.component';
import { CartItem } from '../../models/cart-item.model';
import { FormsModule } from '@angular/forms';

describe('CartItemComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;
  let mockCartItem: CartItem;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartItemComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
    mockCartItem = {
      product: {
        id: 1,
        name: 'Test Product',
        price: 100,
        url: 'http://test.com',
        description: 'Test Description',
      },
      quantity: 1,
    };
    component.item = mockCartItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit quantityChanged event when onQuantityChange is called', () => {
    spyOn(component.quantityChanged, 'emit');
    component.onQuantityChange(2);
    expect(component.quantityChanged.emit).toHaveBeenCalledWith({
      item: mockCartItem,
      quantity: 2,
    });
  });

  it('should emit itemDeleted event when onDeleteClick is called', () => {
    spyOn(component.itemDeleted, 'emit');
    component.onDeleteClick();
    expect(component.itemDeleted.emit).toHaveBeenCalledWith(
      mockCartItem.product,
    );
  });
});
