import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/services/offers.service';
import { OffersSorter } from 'src/app/utils/offers-sorter';
import { MainPageService } from '../../services/main-page.service';
import { CommonModule } from '@angular/common';
import { OffersSortingComponent } from '../offers-sorting/offers-sorting.component';
import { OffersListComponent } from '../offers-list/offers-list.component';

@Component({
  selector: 'app-offers-catalog',
  templateUrl: './offers-catalog.component.html',
  imports: [CommonModule, OffersSortingComponent, OffersListComponent],
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
