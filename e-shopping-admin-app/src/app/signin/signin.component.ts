import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{

  loginRef!:FormGroup;
  msg:string="";

  constructor(public formBuilder: FormBuilder, public authService:AuthService, public router:Router){}  //DI for formbuild
  ngOnInit():void {
    this.loginRef=this.formBuilder.group({
      emailid:[],
      password:[]
    });
  }

  signIn(){
    let login = this.loginRef!.value;

    if(this.authService.signIn(login)){
      alert("Successfully login")
      sessionStorage.setItem("admin",login.emailid);
      // this.loginRef.  TO DO:  Need to clear the login page before navigating to the home page.  Need Help
      this.router.navigate(["home"])
    } else {
      alert ("failure try once again")
      this.msg = "Invalid emailid or password";
    }
    this.loginRef.reset();
  }

}
