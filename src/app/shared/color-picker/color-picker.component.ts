import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'color-picker',
  templateUrl: 'color-picker.component.html',
  styleUrls: ['color-picker.component.css']
})
export class ColorPickerComponent {
  @Input() colors: Array<String> = [];
  @Output() selected = new EventEmitter();
  isSelectorVisible: boolean = false;

  showSelector(value: boolean) {
    this.isSelectorVisible = value;
  }

  selectColor(color: string) {
    this.showSelector(false);
    this.selected.next(color);
  }
}
