import { Component } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [LoginFormComponent],
})
export class LoginComponent {}
