import { NgModule } from '@angular/core';

import { MaterialModule } from '@angular/material';

import { AboutComponent }   from './about.component';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  imports: [ AboutRoutingModule, MaterialModule ],
  exports: [],
  declarations: [AboutComponent],
  providers: [],
})
export class AboutModule { }

