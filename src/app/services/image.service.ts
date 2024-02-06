import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  URL = 'https://localhost:7297/api/';

  constructor(
    private httpClient: HttpClient,
    private userAuthService:UserAuthService
    ) { }

  
    
    uploadImage(file: File,houseId:any) {
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);
      return this.httpClient.post(this.URL + `Image/${houseId}`, formData);
    }

    getImageByHouseId(id:any){
      return this.httpClient.get(this.URL + `Image/${id}`);
    }

  private createAuthorizationHeader(): HttpHeaders{
    return new HttpHeaders().set(
      'Authorization' , 'Bearer ' + this.userAuthService.getToken()
    )
  }
}
