import { notificationService } from './notification/shared/notification.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HeaderComponent } from './header/header.component';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddpostComponent } from './addpost/addpost.component';
import { AllpostComponent } from './allpost/allpost.component';
import { NotificationComponent } from './notification/notification.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuard } from './route-guard';
import {Ng2CarouselamosModule} from 'ng2-carouselamos';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent,
    HeaderComponent,
    AddpostComponent,
    AllpostComponent,
    NotificationComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    Ng2CarouselamosModule,
    RouterModule
  ],
  providers: [notificationService,RouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
