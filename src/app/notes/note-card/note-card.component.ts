import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Note } from '../shared';

@Component({
  selector: 'rt-note-card',
  templateUrl: 'note-card.component.html',
  styleUrls: ['note-card.component.css']
})
export class NoteCardComponent {
  @Input() note = Note;
  @Output() checked = new EventEmitter();
  showCheck: boolean = false;

  toggle() {
    this.showCheck = !this.showCheck;
  }

  onChecked() {
    this.checked.next(this.note);
  }
}
