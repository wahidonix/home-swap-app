import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  id:any;
  
  constructor() { }

  public setRole(role: any){
    localStorage.setItem("role", role);
  }

  public getRole(){
    return localStorage.getItem("role");
  }

  public setUserId(userId: any){
    localStorage.setItem("userId", JSON.stringify(userId));
  }

  public getUserId(){
    return localStorage.getItem("userId");
  }

  public setToken(jwtToken:string){
    localStorage.setItem("jwtToken",jwtToken);
  }

  public getToken(){
    return localStorage.getItem("jwtToken");
  }

  public clear(){
    localStorage.clear();
  }

  public isLoggedIn(){
    return this.getRole() && this.getToken();
  }
}
