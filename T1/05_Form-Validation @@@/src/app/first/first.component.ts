import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { forbiddenNameValidator } from '../Custom-Validator/userName.validators';


export interface Person {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// Password-ConfirmPassword mismached fn()
function matchPasswordValidator(passwordKey: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const password = control.root.get(passwordKey);
    const confirmPassword = control.value;
    if (password && confirmPassword !== password.value) {
      return { 'passwordMismatch': true };
    }
    return null;
  };
}

@Component({
  selector: 'first-root',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})


export class FirstComponent implements OnInit {
  // user: User;
  person: Person;


  //User name Validators for "First Name" & "Last Name"
  nameValidators = [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(30),
    forbiddenNameValidator(/admin/)   //custon name validators
  ];

  //Password Validators for "Password" & "Confirm Password"
  passwordValidators = [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(30),
    Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
  ];

  
  constructor() {
    this.person = {} as Person;

    this.myForm = new FormGroup({

      firstName: new FormControl(this.person.firstName, this.nameValidators),
      lastName: new FormControl(this.person.lastName, this.nameValidators),
      email: new FormControl(this.person.email, [Validators.required, Validators.email]),
      password: new FormControl(this.person.password, this.passwordValidators),
      confirmPassword: new FormControl(this.person.confirmPassword, [
        ...this.passwordValidators,
        matchPasswordValidator('password') // Add custom validator to check for password match
      ])
    });
  }


  ngOnInit(): void {}

  
  // Form
  myForm: FormGroup;


  //get method
  get firstName() {
    return this.myForm.get('firstName');
  }
  get lastName() {
    return this.myForm.get('lastName');
  }
  get email() {
    return this.myForm.get('email');
  }
  get password() {
    return this.myForm.get('password');
  }
  get confirmPassword() {
    return this.myForm.get('confirmPassword');
  }

  //for Submit button
  onSubmit() {
    console.log(this.myForm.value);
  }
}