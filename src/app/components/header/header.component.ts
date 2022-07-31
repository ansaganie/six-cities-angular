import { Component } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(
    private authorizationService: AuthorizationService
  ){}

  getAuthorized() {
    return this.authorizationService.getAuthorized();
  }

  getCurrentUser() {
    return this.authorizationService.getCurrentUser();
  }
}
