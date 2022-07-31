import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import IOffer from '../models/IOffer';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  private offers: IOffer[] = [];
  private isLoading = false;

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

  getOffers(sortFunction = (_a: IOffer, _b: IOffer) => 0) {
    return [...this.offers].sort(sortFunction);
  }

  getIsLoading() {
    return this.isLoading;
  }
}
