import { Component, } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  items:Array<any> = [];

  constructor() { 

    this.items=[
      {name:'assets/images/thumb1.png'},
      {name:'assets/images/thumb2.png'},
      {name:'assets/images/thumb3.png'},
      {name:'assets/images/thumb4.png'},
      {name:'assets/images/thumb5.png'},
      {name:'assets/images/thumb1.png'},
      {name:'assets/images/thumb2.png'},
      {name:'assets/images/thumb3.png'},
      {name:'assets/images/thumb4.png'},
      {name:'assets/images/thumb5.png'},
    ];
  }
  }

 
