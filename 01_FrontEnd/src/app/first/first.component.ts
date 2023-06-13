import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  // property
  title = "Angualr Full Course in Bangla";

  // array
  items: any[] = [
    'id', 'name', 'age'
  ]

  constructor() {}

  ngOnInit():void {
    this.f();
    this.f2();
  }


  //function -> f(){}
  f(){
    console.log("Hello Bangladesh");
  }

  f2(){
    return this.title;
  }

  sum(){
    return 20+10;
  }

}
