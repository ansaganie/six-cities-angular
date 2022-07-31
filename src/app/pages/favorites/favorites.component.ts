import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import IOffer from 'src/app/models/IOffer';
import { AccommodationType } from 'src/app/constants/accommodation-type';

import { OffersService } from 'src/app/services/offers.service';
import { UserService } from 'src/app/services/user.service';


const MAX_RATING_WIDTH = 100;
const MAX_RATING_VALUE = 5;

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html'
})
export class FavoritesComponent implements OnInit {
  isOffersLoading = false;
  togglingOffers = new Set<string>();

  constructor(
    private offersService: OffersService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.userService.getAuthorized()) {
      this.router.navigateByUrl('/login');
    }

    this.isOffersLoading = true;
    this.offersService.loadFavorites().subscribe(() => {
      this.isOffersLoading = false;
    });
  }

  getOffersMap() {
    return this.offersService.getFavoriteOffers();
  }

  handleBookmarkClick(offer: IOffer) {
    this.togglingOffers.add(offer.id);
    this.offersService.toggleFavorite(offer).subscribe({
      complete: () => {
        this.togglingOffers.delete(offer.id);
      },
      error: () => {
        alert('Sorry, item was not added to favorites');
      }
    });
  }

  getAccommodationType(type: string){
    return AccommodationType[type];
  }

  getRatingString(rating: number) {
    return `${((Math.round(rating) * MAX_RATING_WIDTH) / MAX_RATING_VALUE)}%`
  }
}
