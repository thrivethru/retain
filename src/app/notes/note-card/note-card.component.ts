import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Note } from '../shared';

@Component({
  selector: 'rt-note-card',
  templateUrl: 'note-card.component.html',
  styleUrls: ['note-card.component.css']
})
export class NoteCardComponent {
  @Input() note: Object = Note;
  @Output() checked: EventEmitter<any> = new EventEmitter();
  showCheck: boolean = false;

  toggle(): void {
    this.showCheck = !this.showCheck;
  }

  onChecked(): void {
    this.checked.next(this.note);
  }
}
