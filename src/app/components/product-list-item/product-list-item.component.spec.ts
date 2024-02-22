import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListItemComponent } from './product-list-item.component';
import { FormsModule } from '@angular/forms';

describe('ProductListItemComponent', () => {
  let component: ProductListItemComponent;
  let fixture: ComponentFixture<ProductListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListItemComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
