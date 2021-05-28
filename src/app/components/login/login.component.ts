import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { AuthService, Credentials } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  constructor(
    private router: Router,
    private authService: AuthService,
    private toast: MatSnackBar
  ) { }

  logInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    repeat: new FormControl('', [Validators.required])
  })

  credentials: Credentials = {
    email: '',
    password: ''
  }

  haveAccount: boolean = true;

  checkIfAccount() {
    this.haveAccount = !this.haveAccount;
  }

  login() {
    this.credentials = {
      email: this.logInForm.value.email,
      password: this.logInForm.value.password
    }

    window.localStorage.setItem('userName', this.credentials.email);

    this.authService.login(this.credentials)
      .then(() => this.router.navigate(['/myflights']))
      .catch(error => this.toast.open(error.message));
  }

  register() {
    this.credentials = {
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    }
    this.authService.register(this.credentials)
      .then(() => this.toast.open('Konto zostało założone, możesz się teraz zalogować', '', { panelClass: 'toast-success' }))
      .then(() => this.router.navigate(['']))
      .catch(error => this.toast.open(error.message, '', { panelClass: 'toast-error' }));
  }
}
