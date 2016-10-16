import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { ColorPickerComponent } from './color-picker';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ColorPickerComponent
  ],
  declarations: [ ColorPickerComponent ],
  providers: [],
})
export class SharedModule { }
