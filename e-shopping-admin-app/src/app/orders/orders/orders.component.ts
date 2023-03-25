import { Component, OnInit} from '@angular/core';
import { Orders } from '../orders';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{

  orders:Array<Orders>=[];

  constructor (public ordersService:OrdersService) {

  }

  ngOnInit(): void {
    this.loadAllOrders()
  }

  loadAllOrders(){
    this.ordersService.loadAllOrderDetails().subscribe({
      next:(result:any)=>{

      },
      error:(error:any)=>{

      },
      complete:()=>{

      }
    })
  }

  deleteOrder(oid:any){

    let flag= confirm("Are you sure to Delete?");

    if (flag){
      this.ordersService.deleteOrdersbyid(oid).subscribe({
        next:(result:any)=>{

        },
        error:(error:any)=>{

        },
        complete:()=>{
          this.loadAllOrders();
        }
      })
    } else {
      alert("Order Was Not Deleted")
    }
  }

}
