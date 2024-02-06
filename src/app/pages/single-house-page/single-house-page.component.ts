import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-single-house-page',
  templateUrl: './single-house-page.component.html',
  styleUrls: ['./single-house-page.component.css']
})
export class SingleHousePageComponent implements OnInit{
  userId:any;
  house:any;
  constructor(
    private route: ActivatedRoute,
    private houseService: HouseService
  ){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id');
    })
    this.getHouseById();
  }

  getHouseById(){
    return this.houseService.getSingleHouse(this.userId).subscribe(
      (response)=>{
        this.house = response;
        console.log(this.house);
        
      },
      (error) => {
        console.log(error);
        
      }
    )
  }

}
