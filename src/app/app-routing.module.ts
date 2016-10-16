import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotesComponent } from './notes';
import { AboutComponent } from './about';
import { AuthComponent, AuthService } from './core';
import { LayoutComponent } from './layout.component';

export const routes: Routes = [
//  { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
  {
    path: '',
    canActivate: [AuthService], 
    component: LayoutComponent,
    children: [ 
      { 
        path: '',
        component: NotesComponent
   //     redirectTo: 'about'
  //      loadChildren: './notes.module#NotesModule'
      },
      {
        path: 'about',
        component: AboutComponent
        //loadChildren: './about.module#AboutModule?sync=true'
      }
    ]
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
