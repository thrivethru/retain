import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf }       from '@angular/core';
import { CommonModule }      from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthService, AppBarComponent, AuthComponent } from './';

import { ApiService } from './api.service';
import { StoreService } from './store.service';
import { StoreHelperService } from './store-helper.service';

@NgModule({
  imports:      [ 
    CommonModule,
    FormsModule, 
    RouterModule
  ],
  declarations: [ 
    AppBarComponent,
    AuthComponent
  ],
  exports:      [ 
    AppBarComponent,
    AuthComponent
  ],
  providers:    [ 

  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
  static forRoot():ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
              AuthService,
              StoreService,
              StoreHelperService,
              ApiService
            ]
        };
    }

}
