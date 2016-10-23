import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { NoteService } from './shared';
import { NotesComponent } from './notes.component';
import { NoteCardComponent } from './note-card';
import { NoteCreatorComponent } from './note-creator';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [],
  declarations: [
    NotesComponent,
    NoteCardComponent,
    NoteCreatorComponent
  ],
  providers: [
    NoteService
  ]
})
export class NotesModule { }
