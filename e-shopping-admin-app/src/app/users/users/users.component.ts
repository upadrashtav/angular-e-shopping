import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users:Array<Users>=[];

  constructor(public userService:UsersService) {

  }

  ngOnInit():void{
    this.loadAllUsers()
  }

  loadAllUsers(){
    this.userService.loadAllUserDetails().subscribe({
      next:(result:any)=>{
        this.users=result;
      },
      error:(error:any)=> {

      },
      complete:()=>{

      }
    })

  }

  deleteUsers(uid:any){

    let flag= confirm("Are you sure to Delete(Y/N)?");

    if(flag){
      this.userService.deleteUserById(uid).subscribe({
        next:(result:any)=>{
  
        },
        error:(error:any)=>{
  
        },
        complete:()=>{
          console.log("User Deleted")
          this.loadAllUsers();
        }
      })
    }else {
      alert("User Was Not Deleted")
    }
  }

  // sortByfullName(){
  //   this.users.sort((p1,p2)=>p1.fullName-p2.fullName);
  // }

}
