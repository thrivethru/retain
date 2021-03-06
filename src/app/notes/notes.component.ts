import { Component } from '@angular/core';

import { NoteService, Note } from './shared';
import { StoreService } from '../core';
import 'rxjs';

@Component({
  selector: 'rt-notes',
  templateUrl: 'notes.component.html',
  styleUrls: ['notes.component.css']
})
export class NotesComponent {
 notes: Array<Note> = [];
  constructor(private noteService: NoteService, private store: StoreService) {
    this.store.changes.pluck('notes')
      .subscribe((notes: any) => this.notes = notes);

    this.noteService.getNotes()
      .subscribe(res => this.notes = res.data);
  }

  onCreateNote(note: {}): void {
    this.noteService.createNote(note)
      .subscribe();
  }

  onNoteChecked(note: { id: number }): void {
    this.noteService.completeNote(note)
      .subscribe();
  }
}
