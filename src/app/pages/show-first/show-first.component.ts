import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-show-first',
  templateUrl: './show-first.component.html',
  styleUrls: ['./show-first.component.css']
})
export class ShowFirstComponent implements OnInit{
  id:any;
  house:any;

  constructor(
    private route: ActivatedRoute,
    private houseService: HouseService
  ){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    })
    this.getHouse(this.id);
    console.log(this.id);
    
  }


  getHouse(id:any){
    this.houseService.getSingleHouse(id).subscribe(
      (response)=>{
        console.log(response);
        this.house = response;
        
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }

  
}
