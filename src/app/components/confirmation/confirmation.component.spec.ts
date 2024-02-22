import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationComponent } from './confirmation.component';
import { CartRepository } from '../../repositories/cart.repository';
import { of } from 'rxjs';

describe('ConfirmationComponent', () => {
  let component: ConfirmationComponent;
  let fixture: ComponentFixture<ConfirmationComponent>;
  const mockCartRepository = jasmine.createSpyObj('CartRepository', ['getCart', 'addProduct', 'removeProduct', 'completeOrder']); // Add 'completeOrder' here
  mockCartRepository.completeOrder.and.returnValue(of({})); // Return an Observable

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmationComponent],
      providers: [{
        provide: CartRepository, useValue: mockCartRepository
      },],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
