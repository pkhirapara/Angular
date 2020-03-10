import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {CommonService} from "./common.service";
import {HttpClientModule} from "@angular/common/http";
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FormComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,AppRoutingModule
  ],
  providers: [CommonService],
  bootstrap: [DashboardComponent]
})
export class AppModule { }
