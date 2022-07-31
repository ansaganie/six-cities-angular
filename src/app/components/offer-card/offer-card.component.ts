import { Component, Input } from '@angular/core';
import IOffer from 'src/app/models/IOffer';
import {AccommodationType} from 'src/app/constants/accommodation-type';
import { OffersService } from '../../services/offers.service';

const MAX_RATING_WIDTH = 100;
const MAX_RATING_VALUE = 5;

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss']
})
export class OfferCardComponent {
  @Input() offer!: IOffer;
  isToggling = false;

  constructor(
    private offersService: OffersService
  ){}

  getAccommodationType() {
    return AccommodationType[this.offer.type]
  }

  getRatingString() {
    return `${((Math.trunc(this.offer.rating) * MAX_RATING_WIDTH) / MAX_RATING_VALUE)}%`
  }

  handleBookmarkClick() {
    this.isToggling = true;
    this.offersService.toggleFavorite(this.offer).subscribe({
      complete: () => {
        this.isToggling = false;
      },
      error: () => {
        alert('Sorry, item was not added to favorites');
      }
    })
  }
}
