import { Component } from '@angular/core';

import { ApiService } from '../core';

@Component({
  selector: 'about-container',
  template: `     <div class="about-container">
      <h1>about page</h1>
      <md-icon>check</md-icon>
    </div>
  `
})
export class AboutComponent {
  constructor(private apiService: ApiService) {}
}