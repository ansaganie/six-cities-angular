import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import ILoginForm from 'src/app/models/ILoginForm';
import { UserService } from 'src/app/services/user.service';


const PASSWORD_PATTERN = /^.*(?=.{2,})(?=.*\d)(?=.*[a-zA-Z]).*$/i;
const EMAIL_REQUIRED = 'No email provided';
const INVALID_EMAIL = 'Invalid email address';
const PASSWORD_REQUIRED = 'No password provided';
const SHORT_PASSWORD = 'Password is too short - should be 8 chars minimum';
const PASSWORD_MATCH = 'Password should contain minimum one Latin letter and one number';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  imports: [ReactiveFormsModule],
})
export class LoginFormComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(PASSWORD_PATTERN)
    ])
  });
  emailErrorMessage = '';
  passwordErrorMessage = '';

  constructor(
    private userService: UserService,
    private router: Router,
  ){}

  handleFormSubmit() {
    this.validateForm();

    if (this.loginForm.valid) {
      const loginForm: ILoginForm = {
        email: this.loginForm.value.email || '',
        password: this.loginForm.value.password || '',
      }
      this.loginForm.disable();

      this.userService.login(loginForm).subscribe({
          complete: () => {
            this.router.navigateByUrl('/');
          },
          error: (error) => {
            alert(error.error.error);
            this.loginForm.enable();
          },
        });
    }
  }

  validateForm() {
    const email = this.loginForm.controls.email;
    const password = this.loginForm.controls.password;

    if (email.invalid) {
      if (email.errors?.['required']) {
        this.emailErrorMessage = EMAIL_REQUIRED;
      }

      if (email.errors?.['email']) {
        this.emailErrorMessage = INVALID_EMAIL;
      }
    } else {
      this.emailErrorMessage = '';
    }

    if (password.invalid) {
      if (password.errors?.['required']) {
        this.passwordErrorMessage = PASSWORD_REQUIRED;
      }

      if (password.errors?.['minlength']) {
        this.passwordErrorMessage = SHORT_PASSWORD;
      }

      if (password.errors?.['pattern']) {
        this.passwordErrorMessage = PASSWORD_MATCH;
      }
    } else {
      this.passwordErrorMessage = '';
    }
  }
}
