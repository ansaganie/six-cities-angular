import { Component } from '@angular/core';
import { SortType } from 'src/app/constants/sort-type';
import { MainPageService } from '../../services/main-page.service';

@Component({
  selector: 'app-offers-sorting',
  templateUrl: './offers-sorting.component.html',
  styleUrls: ['./offers-sorting.component.scss']
})
export class OffersSortingComponent{
  isShown = false;

  constructor(
    private mainPageService: MainPageService
  ){}

  getSortTypes() {
    return Object.values(SortType);
  }

  getCurrentSortType() {
    return this.mainPageService.getCurrentSortType();
  }

  handleChoose(newSortType: string) {
    this.mainPageService.setCurrentSortType(newSortType);
    this.isShown = false;
  }
}
