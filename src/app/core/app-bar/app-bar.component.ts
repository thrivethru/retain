import { Component, OnInit } from '@angular/core';

import { AuthService } from '../';

@Component({
  selector: 'app-bar',
  templateUrl: 'app-bar.component.html',
  styleUrls: ['app-bar.component.css']
})
export class AppBarComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit() { }

  signout() {
    this.authService.signout();
  }
}