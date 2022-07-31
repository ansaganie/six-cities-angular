import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs';

import {environment} from '../../environments/environment';
import { TokenService } from './token.service';
import IReview from '../models/IReview';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private reviewsMap: Record<string, IReview[]> = {};

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  loadReviews(offerId: string) {
    const token = this.tokenService.getToken() || '';

    return this.http.get<IReview[]>(`${environment.apiUrl}/comments/${offerId}`, {
      headers: new HttpHeaders({ ['x-token']: token })
    }).pipe(tap((data) => {
      console.log(data);
      
      this.reviewsMap[offerId] = data;
    }));
  }

  getReviews(offerId: string) {
    return this.reviewsMap[offerId];
  }
}
