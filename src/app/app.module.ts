import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './layout.component';

import { NotesModule } from './notes';
import { AboutModule } from './about/about.module';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    AppRoutingModule,
    MaterialModule.forRoot(),
    NotesModule,
    AboutModule
  ],
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
