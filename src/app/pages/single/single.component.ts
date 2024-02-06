import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HouseService } from 'src/app/services/house.service';
import { ImageService } from 'src/app/services/image.service';
import { OfferService } from 'src/app/services/offer.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit{
  userId:any;
  houses:any = [];
  myHouse:any;
  isModalOpen = false;
  selectedFile: any;
  images:any;
  houseId:any;

  constructor(
    private userAuthService: UserAuthService,
    private houseService: HouseService,
    private offerService: OfferService,
    private imageService: ImageService,
    private router : Router
  ){}
  ngOnInit(): void {
    this.userId = this.userAuthService.getUserId();
    this.getSingleHouse();
    this.getOffersByHouseId();
  }

  getImagesByHouseId(){
      this.imageService.getImageByHouseId(2).subscribe(
      (response)=>{
        this.images = response;
        console.log(this.images);
        
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }

 

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }

  addHouse(houseForm:NgForm){    
    const formData = { ...houseForm.value, userId: this.userId };
    this.houseService.addHouse(formData).subscribe(
      (response)=>{
       console.log(response);
       this.router.navigate(['/home'])
      },
      (error)=>{
        console.log(error); 
        this.router.navigate(['/home'])
      }
    )    
  }

  getSingleHouse(){
    this.houseService.getSingleHouse(this.userId).subscribe(
      (response) => {
        this.myHouse = response;
        this.houseId = this.myHouse.id;
        console.log(this.myHouse);
        
        console.log(this.houseId);
        
      },
      (error) => {
        console.log(error);
        
      }
    )
  }

  getOffersByHouseId(){
    console.log("op");
    
  }

  deleteHouse(id:any){
    this.houseService.deleteHouse(id).subscribe(
      (response)=>{
        this.myHouse = null;
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
