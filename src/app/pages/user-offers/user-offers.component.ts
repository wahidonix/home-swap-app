import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HouseService } from 'src/app/services/house.service';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-user-offers',
  templateUrl: './user-offers.component.html',
  styleUrls: ['./user-offers.component.css']
})
export class UserOffersComponent implements OnInit{
  offers:any;
  houseId:any;
  constructor(
    private route: ActivatedRoute,
    private offerService: OfferService,
    private router: Router,
    private houseService: HouseService
  ){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.houseId = params.get('houseId');
    })
    this.getOffersByHouseId();
  }

  getOffersByHouseId(){
    this.offerService.getOffersByHouseId(this.houseId).subscribe(
      (response)=>{
        console.log(response);
        this.offers = response;
        
      },
      (error)=> {
        console.log(error);
        
      }
    )
  }

  acceptOffer(offerId:any,buyyerId:any,myHouseId:any){
     this.houseService.swappMyHouse(myHouseId).subscribe(
      (response=> {
        console.log(response);
        
      }),
      (error)=>{
        console.log(error);
        
      }
     )
     
     this.houseService.swapBuyersHouse(buyyerId).subscribe(
      (response)=>{
        console.log(response);
        
      },
      (error) => {
        console.log(error);
        
      }
     )

     this.offerService.acceptOffer(offerId).subscribe(
      (response)=>{
        console.log(response);
        this.router.navigate(['/home'])
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }

  deleteOffer(id:any){
    this.offerService.deleteOffer(id).subscribe(
      (response)=>{
        console.log(response);
        this.getOffersByHouseId();
        
      },
      (error) => {
        console.log(error);
        
      }
    )
  }

}
