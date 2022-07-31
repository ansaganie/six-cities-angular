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
  isOffersLoading = false;
  togglingOffers = new Set<string>();

  constructor(
    private offersService: OffersService,
    private authorizationService: AuthorizationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.authorizationService.getAuthorized()) {
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
