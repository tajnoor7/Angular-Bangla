import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {

  }

  // //instance of FormControl
  // color = new FormControl('');

  // name = '';

  myForm = new FormGroup({
    // userName: new FormControl(''),
    // password: new FormControl(''),

    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  })

  onSubmit(){
    console.log(this.myForm.value)
  }


}
