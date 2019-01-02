import { notificationService } from './../notification/shared/notification.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private notifier:notificationService) { }

  ngOnInit() {
  }

  submit(form:NgForm){
    const name = form.value.username;
    const password =form.value.password;
    const email=form.value.email;
    console.log(name , password , email);

    firebase.auth().createUserWithEmailAndPassword(email,password).then(UserData=>{
      console.log(UserData);
      UserData.user.sendEmailVerification();
      firebase.database().ref('users/'+UserData.user.uid).set({
        username:name,
        uid:UserData.user.uid,
        registerationDate :new Date().toString(),
        email:email,
        password:password


      }).then(()=>{
        firebase.auth().signOut();
      }).catch(err=>{
        console.log(err);
        this.notifier.display('error',err.message);
      })
      const message=`
      verification mail sent to ${email} the mail please check`
       this.notifier.display('success',message)
    }).catch(err=>{
      console.log(err);
      this.notifier.display('error',err.message)

    })
  }

}
