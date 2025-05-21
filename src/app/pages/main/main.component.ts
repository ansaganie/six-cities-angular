import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { OffersCatalogComponent } from '../../components/offers-catalog/offers-catalog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  imports: [HeaderComponent, TabsComponent, OffersCatalogComponent],
})
export class MainComponent {}
