import { Component } from '@angular/core';
import { CityName } from 'src/app/constants/ city-name';
import { MainPageService } from '../../services/main-page.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
})
export class TabsComponent {
  constructor(
    private mainPageService: MainPageService
  ) {

  }
  getCityNames() {
    return Object.values(CityName);
  }

  getCurrentCityName() {
    return this.mainPageService.getCurrentCityName();
  }

  handleCityChange(event: MouseEvent, cityName: string) {
    event.preventDefault();
    this.mainPageService.setCurrentCityName(cityName);
  }
}
