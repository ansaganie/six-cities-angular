import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import IOffer from 'src/app/models/IOffer';
import { OffersService } from 'src/app/services/offers.service';
import { OfferCardComponent } from '../offer-card/offer-card.component';

@Component({
  selector: 'app-neighbourhood',
  templateUrl: './neighbourhood.component.html',
  imports: [CommonModule, OfferCardComponent],
})
export class NeighbourhoodComponent implements OnInit {
  @Input() offerId!: string;
  neighbourhoodOffers = new Set<string>();

  constructor(
    private offersService: OffersService
  ) {}

  ngOnInit(): void {
    this.offersService.loadNeibourhood(this.offerId).subscribe((data) => {
      data.forEach(({id}) => this.neighbourhoodOffers.add(id));
    })
  }

  get offers() {
    return this.offersService.getOffers({filterFunc: ({id}) => this.neighbourhoodOffers.has(id)})
  }
}
