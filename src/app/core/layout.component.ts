import { Component } from '@angular/core';

@Component({
  selector: 'rt-layout',
  template: `
    <div class="main-container">
      <rt-app-bar></rt-app-bar>
      <main class="main">
          <router-outlet></router-outlet>
      </main>
    </div>
  `
})
export class LayoutComponent { }
