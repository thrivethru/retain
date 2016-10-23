import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rt-note-creator',
  templateUrl: 'note-creator.component.html',
  styleUrls: ['note-creator.component.css']
})
export class NoteCreatorComponent {
  @Output() createNote: EventEmitter<any> = new EventEmitter();
  colors: Array<string> = ['#B19CD9', '#FF6961', '#77DD77', '#AEC6CF', '#F49AC2', 'white'];
  newNote = {
    title: '',
    value: '',
    color: 'white'
  };
  fullForm: boolean = false;

  onCreateNote(): void {
    const { title, value, color } = this.newNote;

    if (title && value) {
      this.createNote.next({title, value, color});
    }

    this.reset();
  }

  reset(): void {{
    this.newNote = {
      title: '',
      value: '',
      color: 'white'
    };
  }}

  toggle(value: boolean): void {
    this.fullForm = value;
  }

  onColorSelect(color: string): void {
    this.newNote.color = color;
  }
}
