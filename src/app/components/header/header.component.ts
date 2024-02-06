import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  
  role?:string;
  id:any;
  test = this.matchingRoles('User');
  constructor(
    private userAuthService:UserAuthService,
    private router:Router,
    public userService:UserService
  ){}
  ngOnInit(): void {
    
    if(this.userAuthService.getUserId() != null){
      this.id = this.userAuthService.getUserId();
      console.log(this.userAuthService.getUserId());
      
    }


    
  }

  public matchingRoles(allowedRole:any){
    var isMatch = false; 
    let role = this.userAuthService.getRole();
    if(role === allowedRole ){
      isMatch = true;
    }
    return isMatch
    
  }

  public isLoggedIn(){
    return this.userAuthService.isLoggedIn();
  }

  public roleMatch(allowedRole:any){
    let role = this.userAuthService.getRole();
    if(role){
      if(role === allowedRole){
        this.role = "Admin";
      }
      else {
        this.role = "User"
      }
    }
    
    console.log(this.role);
    
  }


  public logout(){
    this.userAuthService.clear();
    this.router.navigate(["/home"]);
  }

}
