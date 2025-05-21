import { Component } from '@angular/core';
import { SortType } from 'src/app/constants/sort-type';
import { MainPageService } from '../../services/main-page.service';
import { CommonModule, NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-offers-sorting',
  templateUrl: './offers-sorting.component.html',
  imports: [CommonModule, NgClass, NgStyle],
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
