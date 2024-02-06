import { Component, OnInit } from '@angular/core';
import { HouseService } from 'src/app/services/house.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-my-house',
  templateUrl: './my-house.component.html',
  styleUrls: ['./my-house.component.css']
})
export class MyHouseComponent implements OnInit{
  house: any;
  id:any;
  userId: any;
  isModalOpen:any;
  object:any = {
    payment: null,
    buyerId: null,
    houseId: null
  }
  constructor(
    private houseService:HouseService,
    private route : ActivatedRoute,
    private userService: UserAuthService,
    private offerService: OfferService,
    private router: Router
  ){}
  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getHouseById();
      this.userId = this.userService.getUserId();
      console.log("user id : " + this.userId);
      
  })

}

  addOffer(offerForm:NgForm){
    const extraPayment = offerForm.value['extra-payment'];
    const payment = offerForm.value['payment'];
    const concatenatedPayment = `${extraPayment} ${payment}`;
    this.object.payment = concatenatedPayment;
    this.object.houseId = this.id;
    this.object.buyerId = this.userId;
    
    this.offerService.addOffer(this.object).subscribe(
      (response)=>{
        console.log(response);
        this.router.navigate(['/home'])
      },
      (error) => {
        console.log(error);
        
      }
    )
    
  }


  getHouseById(){
    return this.houseService.getHouseById(this.id).subscribe(
      (response)=>{
        this.house = response;
        console.log(this.house);
        
      },
      (error) => {
        console.log(error);
        
      }
    )
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

}