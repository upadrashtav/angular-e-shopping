import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{
  constructor(public router:Router, public authService:AuthService){  //Dependency Intejction  (DI) for router and authservice

  }
  ngOnInit(): void{
    sessionStorage.removeItem("admin");
    this.authService.logout();
    this.router.navigate(["/login"])
  }
}
