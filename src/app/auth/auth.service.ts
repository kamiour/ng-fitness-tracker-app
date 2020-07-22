import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User;
  authChange = new Subject<boolean>();

  registerUser(authData: AuthData): void {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };

    this.authChange.next(true);
  }

  login(authData: AuthData): void {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };

    this.authChange.next(true);
  }

  logout(): void {
    this.user = null;

    this.authChange.next(false);
  }

  getUser(): User {
    return { ...this.user };
  }

  isAuth(): boolean {
    return this.user != null;
  }
}
