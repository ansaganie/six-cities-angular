import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule, RouterOutlet],
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
