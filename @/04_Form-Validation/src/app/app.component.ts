import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '04_Form-Validation';


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
