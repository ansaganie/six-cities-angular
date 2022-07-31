import { Injectable } from '@angular/core';
import IUser from '../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private authorized = false;
  private currentUser: IUser | null = null;

  getAuthorized() {
    return this.authorized;
  }

  setAuthorized(state: boolean) {
    this.authorized = state;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  setCurrentUser(user: IUser) {
    this.currentUser = user;
  }
}
