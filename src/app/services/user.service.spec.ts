import { TestBed } from '@angular/core/testing';
import { User } from '../models/user.model';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get user', () => {
    const mockUser: User = {
      fullName: 'John Doe',
      address: '123 Main St',
    };

    service.setUser(mockUser);
    expect(service.getUser()).toEqual(mockUser);

    service.clearUser();
    expect(service.getUser()).toEqual(new User());
  });
});
