import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface User{
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string
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
    password: '',
    confirmPassword: ''
  }


  constructor() {
    this.user = {} as User;
  }

  ngOnInit(): void {

  }

  nameValidators = [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(30)
  ]

  passwordValidators = [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(30),
    // Custom validator for password complexity (e.g., at least one uppercase letter, one lowercase letter, and one digit)
    Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
  ]

  myForm = new FormGroup({

    // firstName: new FormControl(this.user.firstName, [
    //   Validators.required,
    //   Validators.minLength(3),
    //   Validators.maxLength(30),
    // ]),

    firstName: new FormControl(this.user.firstName, this.nameValidators),
    lastName: new FormControl(this.user.lastName, this.nameValidators),

    email: new FormControl(this.user.email, [
      Validators.required,
      Validators.email
    ]),

    password: new FormControl(this.user.password, this.passwordValidators),
    confirmPassword: new FormControl(this.user.confirmPassword, this.passwordValidators),
  })




  get firstName(){
    return this.myForm.get("firstName");
  }
  get lastName(){
    return this.myForm.get("lastName");
  }
  get email(){
    return this.myForm.get("email");
  }
  get password(){
    return this.myForm.get("password");
  }
  get confirmPassword(){
    return this.myForm.get("confirmPassword");
  }


  onSubmit(){
    console.log(this.myForm.value)
  }
  
}
