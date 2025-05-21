import { Component } from '@angular/core';
import { CityName } from 'src/app/constants/ city-name';
import { MainPageService } from '../../services/main-page.service';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  imports: [CommonModule, NgClass],
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
