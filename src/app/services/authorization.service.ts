import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

import ILoginForm from '../models/ILoginForm';
import IUser from '../models/IUser';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private authorized = false;
  private currentUser: IUser | null = null;

  constructor(
    private httpClint: HttpClient,
    private tokenService: TokenService
  ){}

  login(loginForm: ILoginForm) {
    const observable = this.httpClint.post<IUser>(`${environment.apiUrl}/login`, loginForm);

    return observable.pipe(
      tap((data) => {
        this.tokenService.setToken(data.token);
        this.authorized = true;
        this.currentUser = data;
      })
    );
  }

  getAuthorized() {
    return this.authorized;
  }

  setAuthorized(state: boolean) {
    this.authorized = state;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  setCurrentUser(user: IUser | null) {
    this.currentUser = user;
  }
}
