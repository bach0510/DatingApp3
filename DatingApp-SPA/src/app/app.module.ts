import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NavModule } from './nav/nav.module';
import { AuthService } from './_services/auth.service';
import { HomeModule } from './home/home.module';

@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      NavModule,
      AppRoutingModule,
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      HomeModule
   ],
   providers: [
      AuthService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
