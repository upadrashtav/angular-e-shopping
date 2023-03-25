import { Injectable } from '@angular/core';
import { Admin } from '../model/admin';
import {  BehaviorSubject, Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  constructor() { }

  get isLoggedIn():Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  logout(){
    this.loggedIn.next(false);
  }

  login(){
    this.loggedIn.next(true);
  }

  signIn(admin:Admin): boolean {
    if(admin.emailid=="admin@gmail.com" && admin.password=="admin@123"){
      return true;
    }else {
      return false;
    }
    }
  }
