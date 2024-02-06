import { Component, OnInit } from '@angular/core';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-admin-houses',
  templateUrl: './admin-houses.component.html',
  styleUrls: ['./admin-houses.component.css']
})
export class AdminHousesComponent implements OnInit{

  houses: any = [];
  constructor(
    private houseService:HouseService,
  ){}
  ngOnInit(): void {
    this.getAllHouses();
  }


  getAllHouses(){
    this.houseService.getAllHouses().subscribe(
      (response)=>{
        this.houses = response;
        console.log(this.houses);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  blockHouse(id:any){
    this.houseService.blockHouse(id).subscribe(
      (response) => {
        this.getAllHouses();
      },
      (error) => {
        console.log(error);
        
      }
    )
  }

}
