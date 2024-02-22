import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User = new User();

  setUser(user: User): void {
    this.user = user;
  }

  getUser(): User {
    return this.user;
  }

  clearUser(): void {
    this.user = new User();
  }
}
