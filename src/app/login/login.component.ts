import { UserService } from './../notification/shared/user.service';
import { MyFireService } from './../notification/shared/myFire.service';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';
import { notificationService } from '../notification/shared/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(
    private notifier:notificationService,
    private  myFire:MyFireService,
    private userservice:UserService,
    private router:Router){ }


    submit(form:NgForm){
      const username=form.value.username;
      const password=form.value.password;

      firebase.auth().signInWithEmailAndPassword(username,password).then(userData=>{
        if(userData.user.emailVerified)
        {

           return this.myFire.getUserFromDatabse(userData.user.uid);          
        console.log('next');
        }
        else {
          const message=`your email is not yet verfied`
          this.notifier.display('error',message)
          firebase.auth().signOut();
        }
      }).then(getdataFromDatabase=>{
        if(getdataFromDatabase){
          this.userservice.set(getdataFromDatabase);
          this.router.navigate(['/allpost']);
          console.log(getdataFromDatabase)
        };
      }).catch(err=>{
        console.log(err)
        this.notifier.display('error',err.message);
      })
    }
  

  ngOnInit() {

    
  }

  

}
