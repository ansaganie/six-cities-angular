import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import IOffer from 'src/app/models/IOffer';
import { OfferCardComponent } from '../offer-card/offer-card.component';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  imports: [CommonModule, OfferCardComponent],
})
export class OffersListComponent{
  @Input() offers!: IOffer[]
}
