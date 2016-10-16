import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { ApiService, StoreHelperService, StoreService } from '../';

@Injectable()
export class AuthService implements CanActivate {
  JWT_KEY: string = 'retain-token';

  constructor(
    private router: Router,
    private apiService: ApiService,
    private storeHelperService: StoreHelperService,
    private storeService: StoreService
  ) { 
    this.setJwt(window.localStorage.getItem(this.JWT_KEY));
  }

  setJwt(jwt: string) {
    if (jwt !== null) {
      window.localStorage.setItem(this.JWT_KEY, jwt);
      this.apiService.setHeaders({Authorization: `Bearer ${jwt}`})
    }
  }

  authenticate(path: string, creds: Object) {
    return this.apiService.post(`/${path}`, creds)
      .do(res => this.setJwt(res.token))
      .do(res => this.storeHelperService.update('user', res.data))
      .map(res => res.data);
  }

  signout() {
    window.localStorage.removeItem(this.JWT_KEY);
    this.storeService.purge();
    this.router.navigate(['', 'auth']);
  }

  isAuthorized(): boolean {
    return Boolean(window.localStorage.getItem(this.JWT_KEY));
  }

  canActivate(): boolean {
    const isAuth = this.isAuthorized();

    if (!isAuth) {
      this.router.navigate(['', 'auth']);
    }

    return isAuth;
  }
}