import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'rt-auth',
  templateUrl: 'auth.component.html',
  styleUrls: ['auth.component.css']
})
export class AuthComponent {

  user = {
    email: '',
    password: ''
  };

  mode: string = 'signin';

  linkText: string = 'Don\'t have an account?';

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  changeMode() {
    if (this.mode === 'signin') {
      this.mode = 'signup';
      this.linkText = 'Already have an account?';
    } else {
      this.mode = 'signin';
      this.linkText = 'Don\'t have an account?';
    }
  }

  authenticate() {
    this.authService.authenticate(this.mode, this.user)
      .subscribe(() => this.router.navigate(['']));
  }
}
