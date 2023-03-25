import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './users';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string = "http://localhost:3000/users";

  constructor(public httpClient: HttpClient) { } //DI for HttpClient

  loadAllUserDetails(): Observable<Users[]> {
    return this.httpClient.get<Users[]>(this.baseUrl);
  }
  deleteUserById(uid: any): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/" + uid);
  }
}
