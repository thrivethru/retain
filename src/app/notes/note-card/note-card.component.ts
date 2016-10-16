import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'note-card',
  templateUrl: 'note-card.component.html',
  styleUrls: ['note-card.component.css']
})
export class NoteCardComponent implements OnInit {
  @Input() note = {};
  @Output() checked = new EventEmitter();
  showCheck: boolean = false;
  constructor() { }

  ngOnInit() { }

  toggle() {
    this.showCheck = !this.showCheck;
  }
  
  onChecked() {
    this.checked.next(this.note);
  }
}