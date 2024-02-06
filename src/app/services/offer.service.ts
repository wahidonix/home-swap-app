import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  URL = 'https://localhost:7297/api/';


  constructor(
    private httpClient: HttpClient,
    private userAuthService:UserAuthService
    ) { }


    addOffer(offerDto:any){
      return this.httpClient.post(this.URL + 'Offer',offerDto,{
        headers: this.createAuthorizationHeader(),
      });
    }

    getOffers(){
      return this.httpClient.get(this.URL + 'Offer',{
        headers: this.createAuthorizationHeader()
      })
    }

    getOffersByHouseId(id:any){
      return this.httpClient.get(this.URL + `Offer/byHouseId/${id}`,{
        headers: this.createAuthorizationHeader(),
      });  
    }

    deleteOffer(id:any){
      return this.httpClient.delete(this.URL + `Offer/delete/${id}`)
    }

    acceptOffer(id:any){
      return this.httpClient.put(this.URL + `Offer/accept-offer/${id}`,{
        headers: this.createAuthorizationHeader(),
      } )
    }


    private createAuthorizationHeader(): HttpHeaders{
      return new HttpHeaders().set(
        'Authorization' , 'Bearer ' + this.userAuthService.getToken()
      )
    }



    


}
