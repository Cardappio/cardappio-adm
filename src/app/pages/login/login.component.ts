import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html'
})
export class LoginComponent{
  loginForm: FormGroup;
  hasError: boolean = false;
  email: string;
  password:string;
  emailControl: AbstractControl;
  passwordControl: AbstractControl;

  constructor( public fb:FormBuilder, public router: Router) {
    this.loginForm = fb.group({
      email:['', Validators.required],
      password:['', Validators.required]
    });
    this.emailControl = this.loginForm.controls['email'];
    this.passwordControl = this.loginForm.controls['password'];
  }
}

