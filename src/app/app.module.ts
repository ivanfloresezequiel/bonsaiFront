import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BancoComponent } from './Abm/banco/banco.component';
import { CuentaBancariaComponent } from './Abm/cuenta-bancaria/cuenta-bancaria.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { IndexComponent } from './index/index.component';
import { interceptorProvider } from './interceptors/prod-interceptor.service';





@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    RegistroComponent,
    IndexComponent,
    
    
  
   

   
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, HttpClientModule, ReactiveFormsModule, BrowserAnimationsModule
   
  ],
  providers: [ interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
