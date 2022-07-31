import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import IOffer from '../models/IOffer';
import { TokenService } from './token.service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  private offers: IOffer[] = [];
  private isLoading = false;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {}

  loadOffers() {
    const token = this.tokenService.getToken() || '';
    this.isLoading = true;

    this.http.get<IOffer[]>(`${environment.apiUrl}/hotels`, {
      headers: new HttpHeaders({ ['x-token']: token })
    }).subscribe((data) => {
      this.offers = data;
      this.isLoading = false
    });
  }

  loadFavorites() {
    const token = this.tokenService.getToken() || '';
    this.isLoading = true;

    return this.http.get<IOffer[]>(`${environment.apiUrl}/favorite`, {
      headers: new HttpHeaders({ ['x-token']: token })
    });
  }

  getOffers({
    sortFunc = (_a: IOffer, _b: IOffer) => 0,
    filterFunc = (_value: IOffer, _index: number, _array: IOffer[]) => true
  }) {
    return [...this.offers].filter(filterFunc).sort(sortFunc);
  }

  getIsLoading() {
    return this.isLoading;
  }

  toggleFavorite(offer: IOffer) {
    const newState = Number(!offer.is_favorite);
    const token = this.tokenService.getToken() || '';

    return this.http.post<IOffer>(`${environment.apiUrl}/favorite/${offer.id}/${newState}`, {}, {
      headers: new HttpHeaders({ ['x-token']: token })
    }).pipe(tap((data) => {
      const index = this.offers.findIndex(({id}) => id === offer.id);
      this.offers.splice(index, 1, data);
    }));
  }
}
