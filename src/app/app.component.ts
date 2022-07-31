import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from './services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  isInitializing = true;

  constructor(
    private authorizationService: AuthorizationService
  ){}

  ngOnInit(): void {
    this.authorizationService.check()
      .subscribe({
        error: () => {
          this.authorizationService.logout();
        }
      }).add(() => {
        this.isInitializing = false;
      })
  }
}
