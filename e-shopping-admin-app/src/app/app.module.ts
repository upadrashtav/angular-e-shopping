import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LandingComponent } from './landing/landing.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductComponent } from './product/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users/users.component';
import { OrdersComponent } from './orders/orders/orders.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent,
    LandingComponent,
    SigninComponent,
    DashboardComponent,
    LogoutComponent,
    ProductComponent,
    UsersComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
