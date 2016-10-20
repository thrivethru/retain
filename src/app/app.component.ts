import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rt-app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent { }
