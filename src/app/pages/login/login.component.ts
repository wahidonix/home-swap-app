import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  errorMessage:any = null;

  constructor (
    private userService: UserService,
    private userAuthService:UserAuthService,
    private router: Router
    ){}
  ngOnInit(): void {
 
  }

  login(loginForm: NgForm){
    this.userService.login(loginForm.value).subscribe(
      (response:any)=>{
        this.userAuthService.setRole(response.role);
        this.userAuthService.setToken(response.token);
        this.userAuthService.setUserId(response.id);
        this.userAuthService.id = response.id;
        console.log(" id from login: " + this.userAuthService.id);
        
        if(response.role === "Admin"){
          this.router.navigate(["/admin"]);
        } else {
          this.router.navigate(["/user"]);
        }
      },
      (error)=>{
        console.log(error);
        this.errorMessage = error.error;
      }
    );
  }

}
