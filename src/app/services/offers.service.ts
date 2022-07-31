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
  private offersMap: Record<string, IOffer> = {};
  private favoriteOfferIds = new Set<string>();
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
      data.forEach((offer) => this.offersMap[offer.id] = offer);
      this.isLoading = false
    });
  }

  loadOffer(offerId: string) {
    const token = this.tokenService.getToken() || '';

    return this.http.get<IOffer>(`${environment.apiUrl}/hotels/${offerId}`, {
      headers: new HttpHeaders({ ['x-token']: token })
    }).pipe(tap((data) => {
      console.log(data);
      
      this.offersMap[offerId] = data;
    }));
  }

  loadFavorites() {
    const token = this.tokenService.getToken() || '';

    return this.http.get<IOffer[]>(`${environment.apiUrl}/favorite`, {
      headers: new HttpHeaders({ ['x-token']: token })
    }).pipe(tap((data) => data.forEach((offer) => {
      this.favoriteOfferIds.add(offer.id);
      this.offersMap[offer.id] = offer;
    })))
  }

  getOffers({
    sortFunc = (_a: IOffer, _b: IOffer) => 0,
    filterFunc = (_value: IOffer, _index: number, _array: IOffer[]) => true
  }) {
    return [...Object.values(this.offersMap)].filter(filterFunc).sort(sortFunc);
  }

  getOffer(offerId: string) {
    return this.offersMap[offerId];
  }

  getFavoriteOffers() {
    return [...Object.values(this.offersMap)]
      .filter(({id}) => this.favoriteOfferIds.has(id))
      .reduce((acc, offer) => {
        acc[offer.city.name] = [...acc[offer.city.name] || [], offer];
        return acc;
      }, {} as Record<string, IOffer[]>);
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
      this.offersMap[offer.id] = data;

      if (newState) {
        this.favoriteOfferIds.add(offer.id);
      } else {
        this.favoriteOfferIds.delete(offer.id);
      }
    }));
  }
}
