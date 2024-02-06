import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL = 'https://localhost:7297/api/';
  reaquestHeader = new HttpHeaders(
    {"No-Auth": "True"}
  )
  constructor(
    private httpClient: HttpClient,
    private userAuthService:UserAuthService
    ) { }

  public login(loginData: any){
    return this.httpClient.post(this.URL + 'Auth/login', loginData,{headers:this.reaquestHeader});
  }

  public register(registerData: any){
    return this.httpClient.post(this.URL + 'Auth/register', registerData,{headers:this.reaquestHeader});
  }

  public forUser(){
    return this.httpClient.get(this.URL + 'TestRoles/user-route',{
      headers: this.createAuthorizationHeader(),
      responseType:'text',
    });
  }

  public forAdmin(){
    return this.httpClient.get(this.URL + 'TestRoles/admin-route',{
      headers: this.createAuthorizationHeader(),
      responseType:'text',
    });
  }

  private createAuthorizationHeader(): HttpHeaders{
    return new HttpHeaders().set(
      'Authorization' , 'Bearer ' + this.userAuthService.getToken()
    )
  }

  
  
}
