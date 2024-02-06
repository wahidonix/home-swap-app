import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-show-second',
  templateUrl: './show-second.component.html',
  styleUrls: ['./show-second.component.css']
})
export class ShowSecondComponent implements OnInit{
  id:any;
  house:any;
  constructor(
    private route:ActivatedRoute,
    private houseService: HouseService
  ){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    })

    this.getHouse(this.id);
    
  }

  getHouse(id:any){
    this.houseService.getHouseById(id).subscribe(
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
