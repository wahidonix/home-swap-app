import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit{
  selectedFile:any;
  houseId:any;
  images:any;

  constructor(
    private imageService:ImageService,
    private router:Router,
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
      
    }
  )
}

  onUpload(houseId:any) {
    if (this.selectedFile) {
      this.imageService.uploadImage(this.selectedFile,this.houseId).subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['/home']);
        },
        (error) => {
          console.log(error);
          this.router.navigate(['/home']);
        }
      );
    }
  }

  getImageUrl(image: any): string {
    // Assuming you have stored the images as base64 encoded strings in your database
    return 'data:' + image.contentType + ';base64,' + image.imageData;
  }

  getImageSrc(image: any): string {
    // Assuming ImageData is base64 encoded
    return 'data:' + image.contentType + ';base64,' + this.arrayBufferToBase64(image.imageData);
  }

  // This method converts byte array to base64
  arrayBufferToBase64(buffer: ArrayBuffer): string {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }
}
