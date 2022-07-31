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

  getOffers({
    sortFunc = (_a: IOffer, _b: IOffer) => 0,
    filterFunc = (_value: IOffer, _index: number, _array: IOffer[]) => true
  }) {
    return [...this.offers].filter(filterFunc).sort(sortFunc);
  }

  getIsLoading() {
    return this.isLoading;
  }
}
