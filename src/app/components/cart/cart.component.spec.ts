import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { CartService } from '../../services/cart.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let mockCartService;
  let mockUserService;
  let mockRouter;
  let mockToastrService;

  beforeEach(async () => {
    mockCartService = jasmine.createSpyObj(['getCartItems', 'getCart', 'removeFromCart']);
    mockUserService = jasmine.createSpyObj(['setUser']);
    mockRouter = jasmine.createSpyObj(['navigate']);
    mockToastrService = jasmine.createSpyObj(['success']);

    await TestBed.configureTestingModule({
      declarations: [CartComponent],
      providers: [
        { provide: CartService, useValue: mockCartService },
        { provide: UserService, useValue: mockUserService },
        { provide: Router, useValue: mockRouter },
        { provide: ToastrService, useValue: mockToastrService },
      ],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    mockCartService.getCartItems.and.returnValue(of([])); // Add this line
    mockCartService.getCart.and.returnValue({ totalPrice: 0 }); // Add this line

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
