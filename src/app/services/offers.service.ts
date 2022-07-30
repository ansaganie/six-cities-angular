import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import IOffer from '../models/IOffer';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  offers: IOffer[] = [];
  isLoading = false;

  constructor(
    private http: HttpClient,
  ) {}

  loadOffers(): void {
    this.isLoading = true;
    this.http.get<IOffer[]>(`${environment.apiUrl}/hotels`).subscribe((data) => {
      this.offers = data;
      this.isLoading = false
    });
  }

  getOffers() {
    return this.offers;
  }

  getIsLoading() {
    return this.isLoading;
  }
}
