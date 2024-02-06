import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { UserAuthService } from '../services/user-auth.service';

@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanActivate{
  constructor(
    private userService:UserService,
    private userAuthService:UserAuthService,
    private router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    if(this.userAuthService.getToken()!==null){
      const role = route.data["roles"] as Array<string>;
      if(role){
        const match = this.matchingRoles(role);
        if(match){
          return true;
        } else {
          this.router.navigate(["/forbidden"])
          return false;
        }
      }
  }
  this.router.navigate(["/forbidden"]);
  return false;


  }

  public matchingRoles(allowedRole:any){
    var isMatch = false; 
    let role = this.userAuthService.getRole();
    if(role === allowedRole ){
      isMatch = true;
    }
    return isMatch
    
  }



}