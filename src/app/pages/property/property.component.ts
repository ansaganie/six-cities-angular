import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccommodationType } from 'src/app/constants/accommodation-type';
import { OffersService } from 'src/app/services/offers.service';
import { AuthorizationService } from '../../services/authorization.service';

const MAX_RATING_WIDTH = 100;
const MAX_RATING_VALUE = 5;

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
})
export class PropertyComponent implements OnInit {
  isLoading = false;
  isToggling = false;
  offerId = '';

  constructor(
    private route: ActivatedRoute,
    private offersService: OffersService,
    private authorizationService: AuthorizationService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.offerId = data['offerId'];
      this.isLoading = true;
      this.offersService.loadOffer(this.offerId).subscribe(() => this.isLoading = false);
    });
  }

  get offer() {
    return this.offersService.getOffer(this.offerId);
  }
  
  handleBookmarkClick() {
    if (this.authorizationService.getAuthorized()) {
      this.isToggling = true;
      this.offersService.toggleFavorite(this.offer).subscribe({
        complete: () => {
          this.isToggling = false;
        },
        error: () => {
          alert('Sorry, item was not added to favorites');
        }
      });
    } else {
      alert('Only authorized users can bookmark offers. Please login first');
    }
  }

  getAccommodationType(type: string){
    return AccommodationType[type];
  }

  getRatingString(rating: number) {
    return `${((Math.round(rating) * MAX_RATING_WIDTH) / MAX_RATING_VALUE)}%`
  }
}
