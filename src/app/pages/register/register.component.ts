import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  errorMessage:any = null;
  constructor (
    private userService: UserService,
    private userAuthService:UserAuthService,
    private router: Router
    ){}
  ngOnInit(): void {
    
  }

  register(registerForm: NgForm){
    console.log(registerForm.value);
    
    this.userService.register(registerForm.value).subscribe(
      (response)=>{
        this.router.navigate(['/home'])
      },
      (error)=>{
        console.log(error.error);
        this.errorMessage = error.error
      }
    );
  }

    
}
