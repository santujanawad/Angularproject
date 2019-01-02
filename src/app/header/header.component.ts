import { Component, OnInit } from '@angular/core';
import * as firebase from  'firebase';
import { UserService } from '../notification/shared/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

islogin: boolean=false;
  constructor(private userService:UserService) { }
 
  ngOnInit() 
  {
    firebase.auth().onAuthStateChanged(userData=>{
      if(userData)
      this.islogin=true;
      else
      {
        this.islogin=false;
      }
    })
  }

  logout(){
    firebase.auth().signOut().then(()=>{
      this.userService.destroy();
      this.islogin = false;
    })
  }

}
