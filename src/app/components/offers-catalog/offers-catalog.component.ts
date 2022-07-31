import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/services/offers.service';
import { OffersSorter } from 'src/app/utils/offers-sorter';
import { MainPageService } from '../../services/main-page.service';

@Component({
  selector: 'app-offers-catalog',
  templateUrl: './offers-catalog.component.html',
})
export class OffersCatalogComponent implements OnInit {
  constructor(
    private mainPageService: MainPageService,
    public offersService: OffersService,
  ) {}

  ngOnInit(): void {
    this.offersService.loadOffers();
  }

  getOffers() {
    return this.offersService.getOffers({
      sortFunc: OffersSorter[this.mainPageService.getCurrentSortType()],
      filterFunc: ({ city }) => city.name === this.mainPageService.getCurrentCityName()
    });
  }

  getCurrentCityName() {
    return this.mainPageService.getCurrentCityName();
  }
}
