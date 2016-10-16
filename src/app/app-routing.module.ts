import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotesComponent } from './notes';
import { AboutComponent } from './about';
import { AuthComponent, AuthService, LayoutComponent } from './core';

export const routes: Routes = [
  {
    path: '',
    canActivate: [AuthService], 
    component: LayoutComponent,
    children: [ 
      { 
        path: '',
        component: NotesComponent
      },
      {
        path: 'about',
        component: AboutComponent
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
