import { Component, Input } from '@angular/core';
import IOffer from 'src/app/models/IOffer';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html'
})
export class OffersListComponent{
  @Input() offers!: IOffer[]
}
