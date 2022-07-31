import { Injectable } from '@angular/core';
import { CityName } from '../constants/ city-name';
import { SortType } from '../constants/sort-type';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {
  private currentSortType = SortType.Popular;
  private currentCityName = CityName.Paris;

  setCurrentSortType(sortType: string) {
    this.currentSortType = sortType;
  }

  getCurrentSortType() {
    return this.currentSortType;
  }

  setCurrentCityName(sortType: string) {
    this.currentCityName = sortType;
  }

  getCurrentCityName() {
    return this.currentCityName;
  }
}
