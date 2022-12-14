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
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './pages/logout/logout.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { PropertyComponent } from './pages/property/property.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ReviewsFormComponent } from './components/reviews-form/reviews-form.component';
import { NeighbourhoodComponent } from './components/neighbourhood/neighbourhood.component';

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
    HeaderComponent,
    LoginFormComponent,
    LogoutComponent,
    FavoritesComponent,
    PropertyComponent,
    ReviewsComponent,
    ReviewsFormComponent,
    NeighbourhoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
