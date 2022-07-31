import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-logout',
  template: ''
})
export class LogoutComponent implements OnInit {

  constructor(
    private authorizationService: AuthorizationService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authorizationService.setAuthorized(false);
    this.authorizationService.setCurrentUser(null);
    this.tokenService.dropToken();
    this.router.navigateByUrl('/');
  }
}
