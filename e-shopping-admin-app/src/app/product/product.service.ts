import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = "http://localhost:3000/products";
  updateProductId: number = 0;

  constructor(public httpClient: HttpClient) { } //DI for HttpClient

  loadAllProductDetails(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl);
  }
  deleteProductById(pid: any): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/" + pid);
  }
  storeProduct(product:Product):Observable<any>{
    return this.httpClient.post(this.baseUrl,product);
  }

  updateProduct(product:Product):Observable<any>{
    console.log("In Update Product Service: "+product.id);
    return this.httpClient.put(this.baseUrl+"/"+product.id,product);
  }
}

