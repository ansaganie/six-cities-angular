import { Component, OnInit } from '@angular/core';
import IOffer from 'src/app/models/IOffer';
import { OffersService } from 'src/app/services/offers.service';
import { AuthorizationService } from '../../services/authorization.service';
import { Router } from '@angular/router';
import { AccommodationType } from 'src/app/constants/accommodation-type';

const MAX_RATING_WIDTH = 100;
const MAX_RATING_VALUE = 5;

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html'
})
export class FavoritesComponent implements OnInit {
  offersMap: Record<string, IOffer[]> = {};

  constructor(
    private offersService: OffersService,
    private authorizationService: AuthorizationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.authorizationService.getAuthorized()) {
      this.router.navigateByUrl('/login');
    }

    this.offersService.loadFavorites().subscribe((data) => {
      data.forEach((offer) => {
        this.offersMap[offer.city.name] = [...this.offersMap[offer.city.name] || [], offer];
      });
    })
  }

  getAccommodationType(type: string){
    return AccommodationType[type];
  }

  getRatingString(rating: number) {
    return `${((Math.trunc(rating) * MAX_RATING_WIDTH) / MAX_RATING_VALUE)}%`
  }
}
