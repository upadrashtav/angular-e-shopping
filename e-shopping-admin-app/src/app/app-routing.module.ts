import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthGuard } from './auth/auth.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { OrdersComponent } from './orders/orders/orders.component';
import { ProductComponent } from './product/product/product.component';
import { SigninComponent } from './signin/signin.component';
import { UsersComponent } from './users/users/users.component';

//write navigation rules
// http://localhost:4200/aboutus
const routes: Routes = [
  {path: "aboutus", component:AboutusComponent},
  {path: "contactus",component:ContactusComponent},
  {path: "login", component:SigninComponent},
  {path: "logout", component:LogoutComponent},
  {path: "product",component:ProductComponent},
  {path: "home", component:DashboardComponent,canActivate:[AuthGuard],children:[
    {path:"product",component:ProductComponent},
    {path:"users",component:UsersComponent},
    {path: "orders", component:OrdersComponent},
    {path: "logout", component:LogoutComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }