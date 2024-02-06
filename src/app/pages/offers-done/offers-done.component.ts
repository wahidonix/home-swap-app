import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-offers-done',
  templateUrl: './offers-done.component.html',
  styleUrls: ['./offers-done.component.css']
})
export class OffersDoneComponent implements OnInit{
  offersDone:any = [];
  constructor(
    private offerService: OfferService
  ){}
  ngOnInit(): void {
    this.getOffers();
  }

  getOffers(){
    this.offerService.getOffers().subscribe(
      (response)=>{
        console.log(response);
        this.offersDone = response;
        this.offersDone = this.offersDone.filter((offer: { status: string; }) => offer.status === "Accepted");
        console.log(this.offersDone);
        
      },
      (error)=> {
        console.log(error);
        
      }
    )
  }

}
