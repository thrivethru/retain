import { Component } from '@angular/core';
import { AppBarComponent } from './core';

@Component({
  selector: 'layout-component',
  template: `
    <div class="main-container">
      <app-bar></app-bar>
      <main class="main">
          <router-outlet></router-outlet>
      </main>
    </div>
  `
})
export class LayoutComponent { }
