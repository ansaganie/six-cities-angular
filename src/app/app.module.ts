import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffersCatalogComponent } from './components/offers-catalog/offers-catalog.component';
import { OffersListComponent } from './components/offers-list/offers-list.component';
import { OffersSortingComponent } from './components/offers-sorting/offers-sorting.component';
import { OfferCardComponent } from './components/offer-card/offer-card.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    OffersCatalogComponent,
    OffersListComponent,
    OffersSortingComponent,
    OfferCardComponent,
    TabsComponent,
    MainComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }