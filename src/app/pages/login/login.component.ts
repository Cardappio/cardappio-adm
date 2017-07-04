import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { AuthService } from '../providers/auth.service';

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

  constructor( public fb:FormBuilder, public router: Router, public authData: AuthService) {
    this.loginForm = fb.group({
      email:['', Validators.required],
      password:['', Validators.required]
    });
    this.emailControl = this.loginForm.controls['email'];
    this.passwordControl = this.loginForm.controls['password'];
  }

  loginUser(){
    if (!this.loginForm.valid){
      console.log(this.loginForm.value);
    } else {
      this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password)
      .then( authData => {
        console.log("Login deu certo!");
        this.router.navigate(['/tables']);
      }, error => {
        console.log("Login falhou!");
      });
    }
  }

  // logoutUser(){
  //   this.authData.logoutUser().then(authData => {
  //     console.log("Logout deu certo!");
  //     this.router.navigate(['/login']);
  //   }, error => {
  //     console.log("Logout falhou!");
  //   });
  // }

}