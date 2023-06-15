// import { Component,OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

// export interface User{
//   firstName: string,
//   lastName: string,
//   email: string,
//   password: string,
//   confirmPassword: string
// }

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
  

//   user = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   }


//   constructor() {
//     this.user = {} as User;
//   }

//   ngOnInit(): void {

//   }

//   nameValidators = [
//     Validators.required,
//     Validators.minLength(3),
//     Validators.maxLength(30)
//   ]

//   passwordValidators = [
//     Validators.required,
//     Validators.minLength(8),
//     Validators.maxLength(30),
//     // Custom validator for password complexity (e.g., at least one uppercase letter, one lowercase letter, and one digit)
//     Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
//   ]



// //Form
//   myForm = new FormGroup({

//     // firstName: new FormControl(this.user.firstName, [
//     //   Validators.required,
//     //   Validators.minLength(3),
//     //   Validators.maxLength(30),
//     // ]),

//     firstName: new FormControl(this.user.firstName, this.nameValidators),
//     lastName: new FormControl(this.user.lastName, this.nameValidators),

//     email: new FormControl(this.user.email, [
//       Validators.required,
//       Validators.email
//     ]),

//     password: new FormControl(this.user.password, this.passwordValidators),
//     confirmPassword: new FormControl(this.user.confirmPassword, this.passwordValidators),
//   })





//   get firstName(){
//     return this.myForm.get("firstName");
//   }
//   get lastName(){
//     return this.myForm.get("lastName");
//   }
//   get email(){
//     return this.myForm.get("email");
//   }
//   get password(){
//     return this.myForm.get("password");
//   }
//   get confirmPassword(){
//     return this.myForm.get("confirmPassword");
//   }


//   onSubmit(){
//     console.log(this.myForm.value)
//   }
  
// }




import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: User;

  constructor() {
    this.user = {} as User;
    this.myForm = new FormGroup({
      firstName: new FormControl(this.user.firstName, this.nameValidators),
      lastName: new FormControl(this.user.lastName, this.nameValidators),
      email: new FormControl(this.user.email, [Validators.required, Validators.email]),
      password: new FormControl(this.user.password, this.passwordValidators),
      confirmPassword: new FormControl(this.user.confirmPassword, [
        ...this.passwordValidators,
        matchPasswordValidator('password') // Add custom validator to check for password match
      ])
    });
  }

  ngOnInit(): void {}

  nameValidators = [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(30)
  ];

  passwordValidators = [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(30),
    Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
  ];

  // Form
  myForm: FormGroup;

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

  onSubmit() {
    console.log(this.myForm.value);
  }
}
