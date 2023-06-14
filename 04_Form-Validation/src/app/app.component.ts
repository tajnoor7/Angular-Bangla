import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface User{
  firstName: string,
  lastName: string,
  email: string,
  password: any,
  confirmPassword: any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: null,
    confirmPassword: null,
  }

// lastName: any;

  constructor() {
    this.user = {} as User;
  }

  ngOnInit(): void {

  }

  userName = [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(30),
  ]

  myForm = new FormGroup({

    // firstName: new FormControl(this.user.firstName, [
    //   Validators.required,
    //   Validators.minLength(3),
    //   Validators.maxLength(30),
    // ]),

    firstName: new FormControl(this.user.firstName, this.userName ),
    lastName: new FormControl(this.user.lastName, ),

    email: new FormControl(this.user.email),
    password: new FormControl(this.user.password),
    confirmPassword: new FormControl(this.user.confirmPassword),
  })





  get firstName(){
    return this.myForm.get("firstName");
  }


  onSubmit(){
    console.log(this.myForm.value)
  }
  
}
