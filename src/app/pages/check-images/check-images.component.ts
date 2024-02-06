import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-check-images',
  templateUrl: './check-images.component.html',
  styleUrls: ['./check-images.component.css']
})
export class CheckImagesComponent implements OnInit{
  images:any;
  houseId:any;
  noImages:any = false;
  constructor(
    private imageService:ImageService,
    private route:ActivatedRoute
  ){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.houseId = params.get('id');
      this.getImagesByHouseId(this.houseId)
    })
  }

  getImagesByHouseId(id:any){
    this.imageService.getImageByHouseId(id).subscribe(
    (response)=>{
      this.images = response;
      console.log(this.images);
      
    },
    (error)=>{
      console.log(error);
      this.noImages = true
      console.log(this.noImages);
      
    }
  )
}

getImageUrl(image: any): string {
  // Assuming you have stored the images as base64 encoded strings in your database
  return 'data:' + image.contentType + ';base64,' + image.imageData;
}

}
