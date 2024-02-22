import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { ToastrService } from 'ngx-toastr';

import { ProductItemDetailComponent } from './product-item-detail.component';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';

describe('ProductItemDetailComponent', () => {
  let component: ProductItemDetailComponent;
  let fixture: ComponentFixture<ProductItemDetailComponent>;

  const mockProductService = jasmine.createSpyObj('ProductService', ['getProduct']);
  mockProductService.getProduct.and.returnValue(of({})); // Return an Observable
  const mockCartService = jasmine.createSpyObj('CartService', ['addToCart']);
  const mockToastrService = jasmine.createSpyObj('ToastrService', ['success']);
  const mockActivatedRoute = {
    snapshot: {
      paramMap: convertToParamMap({ id: '1' })  // or whatever you need to return
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductItemDetailComponent],
      imports: [FormsModule],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: ProductService, useValue: mockProductService },
        { provide: CartService, useValue: mockCartService },
        { provide: ToastrService, useValue: mockToastrService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
