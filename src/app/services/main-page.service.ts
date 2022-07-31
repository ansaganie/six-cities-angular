import { Injectable } from '@angular/core';
import { SortType } from '../constants/sort-type';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {
  private currentSortType = SortType.Popular;

  setCurrentSortType(sortType: string) {
    this.currentSortType = sortType;
  }

  getCurrentSortType() {
    return this.currentSortType;
  }
}
