import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  URL = 'https://alen-api.onrender.com/api/';


  constructor(
    private httpClient: HttpClient,
    private userAuthService:UserAuthService
    ) { }


    getAllUsers(){
      return this.httpClient.get(this.URL + 'User',{
        headers: this.createAuthorizationHeader(),
      });
    }

    blockUser(id:any){
      return this.httpClient.put(this.URL + `User/blocked-status/${id}`, {
        headers: this.createAuthorizationHeader(),
      });
    }



    private createAuthorizationHeader(): HttpHeaders{
      return new HttpHeaders().set(
        'Authorization' , 'Bearer ' + this.userAuthService.getToken()
      )
    }
}
