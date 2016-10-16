import { Component } from '@angular/core';

import { ApiService } from '../core';

@Component({
  selector: 'about-container',
  template: `     <div class="about-container">
      <h1>Retain, a Google Keep clone</h1>
    </div>
  `
})
export class AboutComponent {
  constructor(private apiService: ApiService) {}
}