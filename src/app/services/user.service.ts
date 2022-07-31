import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs';

import ILoginForm from '../models/ILoginForm';
import IUser from '../models/IUser';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private authorized = false;
  private currentUser: IUser | null = null;
  private favoriteOffers = new Set<string>();

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

  logout() {
    this.tokenService.dropToken();
    this.authorized = false;
    this.currentUser = null;
    this.favoriteOffers.clear();
  }

  check() {
    const token = this.tokenService.getToken() || '';
  
    return this.httpClint.get<IUser>(
      `${environment.apiUrl}/login`,
      {
        headers: new HttpHeaders({
          ['x-token']: token
        })
      }
    ).pipe(tap((data) => {
      this.authorized = true;
      this.currentUser = data;
    }));
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

  addFavoriteOfferId(offerId: string) {
    this.favoriteOffers.add(offerId);
  }

  deleteFavoriteOfferId(offerId: string) {
    this.favoriteOffers.delete(offerId);
  }

  favoriteOfferIdHas(offerId: string) {
    return this.favoriteOffers.has(offerId);
  }
}
