import { Component,OnInit} from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loginapp';

  ngOnInit(){
    const config = {
      apiKey: "AIzaSyA6Df-0lGn7BoGQ_DHbfY4CqMDX2hGz_RU",
      authDomain: "angular-817dc.firebaseapp.com",
      databaseURL: "https://angular-817dc.firebaseio.com",
      projectId: "angular-817dc",
      storageBucket: "angular-817dc.appspot.com",
      messagingSenderId: "936342257981"
    };
    firebase.initializeApp(config);
 
  }
}
