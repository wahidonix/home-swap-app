import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HouseService } from 'src/app/services/house.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-single-house-page',
  templateUrl: './single-house-page.component.html',
  styleUrls: ['./single-house-page.component.css']
})
export class SingleHousePageComponent implements OnInit{
  userId:any;
  house:any;
  images:any;
  constructor(
    private route: ActivatedRoute,
    private houseService: HouseService,
    private imageService: ImageService
  ){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id');
    })
    this.getHouseById();
  }

  getImagesByHouseId(id:any){
    this.imageService.getImageByHouseId(id).subscribe(
    (response)=>{
      this.images = response;
      console.log(this.images);
      
    },
    (error)=>{
      console.log(error);
      
    }
  )
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
