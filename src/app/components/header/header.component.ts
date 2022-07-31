import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(
    private userService: UserService
  ){}

  getAuthorized() {
    return this.userService.getAuthorized();
  }

  getCurrentUser() {
    return this.userService.getCurrentUser();
  }
}
