import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  constructor(
    private userAuthService: UserAuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    if (!this.userAuthService.getToken()) {
      // No token, allow access to the login route
      return true;
    }

    // Token exists, redirect to another route (e.g., home)
    this.router.navigate(["/home"]);
    return false;
  }
}
