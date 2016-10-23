import { Component } from '@angular/core';

import { AuthService } from '../';

@Component({
  selector: 'rt-app-bar',
  templateUrl: 'app-bar.component.html',
  styleUrls: ['app-bar.component.css']
})
export class AppBarComponent {
  constructor(private authService: AuthService) {}

  signout(): void {
    this.authService.signout();
  }
}
