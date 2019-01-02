import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddpostComponent } from './addpost/addpost.component';
import { AllpostComponent } from './allpost/allpost.component';
import { RouteGuard } from './route-guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
      {path:'login',component:LoginComponent},
      {path:'register',component:RegisterComponent},
      {path:'addpost',component:AddpostComponent,canActivate:[RouteGuard]},
      {path:'allpost',component:AllpostComponent,canActivate:[RouteGuard]},
      {path:'**',component:PagenotfoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
