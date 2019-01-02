
import { notificationService } from './shared/notification.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  type:string=null;
  message:string=null;
  
  constructor( private notifier:notificationService) { 
    notifier.emmiter.subscribe(data=>{
      this.type=data.type;
      this.message=data.message;
      this.reset();

    })
  };
  reset(){
    setTimeout(()=>{
      this.type=null;
      this.message=null;
    },5000);
  }

  ngOnInit() {
  }

}
