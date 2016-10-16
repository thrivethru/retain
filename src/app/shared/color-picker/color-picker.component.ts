import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'color-picker',
  templateUrl: 'color-picker.component.html',
  styleUrls: ['color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  @Input() colors: Array<String> = [];
  @Output() selected = new EventEmitter();
  isSelectorVisible: boolean = false;
  constructor() { }

  ngOnInit() { }

  showSelector(value: boolean) {
    this.isSelectorVisible = value;
  }
  
  selectColor(color: string) {
    this.showSelector(false);
    this.selected.next(color);
  }
}