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
    console.log(new Date());
    
  }

  
  isDateDifferenceMoreThanThirtyDays(date1:any,date2:any) {
     // Calculate the difference in milliseconds
  const differenceInMilliseconds = Math.abs(date1 - date2);

  // Convert the difference to days
  const differenceInDays = differenceInMilliseconds / (1000 * 3600 * 24);

  // Check if the difference is more than 30 days
  console.log(differenceInDays < 30);
  
  return differenceInDays < 30;
    
  }

  getAllUsers(){
    this.membersService.getAllUsers().subscribe(
      (response)=>{
        this.users = response;
        this.filteredUsers = this.users.filter((user: { role: string; }) => user.role === 'User'); 
      
        this.filteredUsers.map((f: { dateBlocked: any; }) => console.log(f.dateBlocked)
        
        
    )
        
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
