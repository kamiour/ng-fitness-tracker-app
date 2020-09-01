import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanLoad,
  Route
} from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | never {
    if (this.auth.isAuth()) {
      return true;
    }

    this.router.navigate(['/login']);
  }

  canLoad(route: Route): boolean | never {
    if (this.auth.isAuth()) {
      return true;
    }

    this.router.navigate(['/login']);
  }
}
