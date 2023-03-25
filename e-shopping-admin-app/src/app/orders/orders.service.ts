import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { OrdersComponent } from './orders/orders.component';
import { Orders } from './orders';

@Injectable({
  providedIn: 'root'
})

export class OrdersService {

  baseUrl: string = "http://localhost:3000/orders";

  constructor(public httpClient:HttpClient) { }    //DI for Orders

  loadAllOrderDetails(): Observable<Orders[]> {
    return this.httpClient.get<Orders[]>(this.baseUrl);
  }

  deleteOrdersbyid(oid:any):Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/" + oid);
  }

}
