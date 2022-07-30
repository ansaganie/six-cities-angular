import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TokenService {
  private readonly key: string = 'six-cities-8';

  setToken(item: string): void {
    localStorage.setItem(this.key, item);
  }

  getToken(): string | null {
    return localStorage.getItem(this.key);
  }

  dropToken(): void {
    localStorage.removeItem(this.key);
  }
}
