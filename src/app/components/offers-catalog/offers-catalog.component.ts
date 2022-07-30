import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-offers-catalog',
  templateUrl: './offers-catalog.component.html',
})
export class OffersCatalogComponent implements OnInit {
  constructor(
    public offersService: OffersService
  ) {}

  ngOnInit(): void {
    this.offersService.loadOffers();
  }
}
