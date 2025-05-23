import { Routes } from '@angular/router';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { MainComponent } from './pages/main/main.component';
import { PropertyComponent } from './pages/property/property.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'offer/:offerId',
    component: PropertyComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
];
