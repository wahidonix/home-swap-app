import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users:any = [];
  filteredUsers:any = [];
  constructor(
    private membersService:MembersService,
  ){}
  ngOnInit(): void {
    this.getAllUsers();
  }


  getAllUsers(){
    this.membersService.getAllUsers().subscribe(
      (response)=>{
        this.users = response;
        this.filteredUsers = this.users.filter((user: { role: string; }) => user.role === 'User');
        
        console.log(this.users);
        console.log(this.filteredUsers);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  blockUser(id:any){
    this.membersService.blockUser(id).subscribe(
      (response) => {
        this.getAllUsers();
      },
      (error) => {
        console.log(error);
        
      }
    )
  }

}
