import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  products:Array<Product>=[];

  constructor(public productService:ProductService) {

  }

  ngOnInit():void{
    this.loadAllProducts()
  }

  loadAllProducts(){
    this.productService.loadAllProductDetails().subscribe({
      next:(result:any)=>{
        this.products=result;
      },
      error:(error:any)=> {

      },
      complete:()=>{

      }
    })

  }

  deleteProduct(pid:any){

    let flag= confirm("Are you sure to Delete(Y/N)?");

    if(flag){
      this.productService.deleteProductById(pid).subscribe({
        next:(result:any)=>{
  
        },
        error:(error:any)=>{
  
        },
        complete:()=>{
          console.log("Product Deleted")
          this.loadAllProducts();
        }
      })
    }else {
      alert("Product Was Not Deleted")
    }
  }

  sortByPrice(){
    this.products.sort((p1,p2)=>p1.price-p2.price);
  }

}
