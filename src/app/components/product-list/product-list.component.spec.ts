import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { ToastrService } from 'ngx-toastr';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  const mockProductRepository = {
    // Add methods that your component uses from ProductRepository
    // For example, if your component uses getProducts method, add it like this:
    getProducts: () => of([]), // returns an empty array
  };

  const mockCartRepository = {
    // Add methods that your component uses from CartRepository
    // For example, if your component uses addToCart method, add it like this:
    addToCart: () => {}, // does nothing
  };

  const mockToastrService = {
    // Add methods that your component uses from ToastrService
    // For example, if your component uses success method, add it like this:
    success: () => {}, // does nothing
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [FormsModule],
      providers: [
        { provide: ProductService, useValue: mockProductRepository },
        { provide: CartService, useValue: mockCartRepository },
        { provide: ToastrService, useValue: mockToastrService }, // Add this line
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
