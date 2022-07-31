import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  isInitializing = true;

  constructor(
    private userService: UserService
  ){}

  ngOnInit(): void {
    this.userService.check()
      .subscribe({
        error: () => {
          this.userService.logout();
        }
      }).add(() => {
        this.isInitializing = false;
      })
  }
}
