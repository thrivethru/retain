import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { click } from '../../../../config/testing';

import { NoteCardComponent } from './note-card.component';

describe('NoteCardComponent', () => {
  let comp: NoteCardComponent;
  let fixture: ComponentFixture<NoteCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteCardComponent ],
      imports: [ MaterialModule.forRoot() ]
    });
    fixture = TestBed.createComponent(NoteCardComponent);
    comp = fixture.componentInstance;
  });

  it ('should instantiate component', () => {
    expect(comp instanceof NoteCardComponent).toBe(true, 'should create NoteCardComponent');
  });
});

describe('NoteCardComponent within host component', () => {
  let hostFixture: ComponentFixture<TestHostComponent>;
  let testHost: TestHostComponent;
  let noteEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteCardComponent, TestHostComponent ],
      imports: [ MaterialModule.forRoot() ] // must use forRoot to add material providers
    });
  }));

  beforeEach(() => {
    // create TestHostComponent instead of NoteCardComponent
    hostFixture = TestBed.createComponent(TestHostComponent);
    testHost = hostFixture.componentInstance;
    noteEl = hostFixture.debugElement.query(By.css('.note-card'));
    hostFixture.detectChanges(); // trigger initial data binding
  });

  it('should display the correct title', () => {
    const title = hostFixture.debugElement.query(By.css('.title'));
    hostFixture.detectChanges();

    expect(title.nativeElement.textContent.trim()).toEqual('Grocery list');
  });

  it('should display the correct value', () => {
    const value = hostFixture.debugElement.query(By.css('.value'));
    hostFixture.detectChanges();

    expect(value.nativeElement.textContent.trim()).toEqual('get apples and Blue Bell ice cream');
  });

  it('should toggle checkmark', () => {
    const noteCard = noteEl.nativeElement;
    hostFixture.detectChanges();

    const evObj = document.createEvent('MouseEvents');
    evObj.initEvent('mouseenter', true, false);
    noteCard.dispatchEvent(evObj);
    hostFixture.detectChanges();

    let check = hostFixture.debugElement.query(By.css('.icon')).nativeElement;
    expect(check).toBeTruthy();

    evObj.initEvent('mouseleave', true, false);
    noteCard.dispatchEvent(evObj);
    hostFixture.detectChanges();

    check = hostFixture.debugElement.query(By.css('.icon')); //debugElement is null so can't get nativeElement
    expect(check).toBeNull();
  });

  it('should raise selected event when clicked', () => {
    const noteCard = noteEl.nativeElement;
    const evObj = document.createEvent('MouseEvents');
    evObj.initEvent('mouseenter', true, false);
    noteCard.dispatchEvent(evObj);
    hostFixture.detectChanges();

    let check = hostFixture.debugElement.query(By.css('.icon')).nativeElement;
    expect(check).toBeTruthy();
    expect(testHost.isChecked).toBe(false);
    click(check);
    expect(testHost.isChecked).toBe(true);
  });

  it('background-color should be blue', () => {
    hostFixture.detectChanges();
    expect(noteEl.styles['background-color']).not.toBe('red');
    expect(noteEl.styles['background-color']).toBe('blue');
  });
});

@Component({
  template: `
        <rt-note-card
          [note]="note"
          (checked)="onNoteChecked($event)">
        </rt-note-card>
      `
})
class TestHostComponent {
  note: {} = {
    id: 1,
    title: 'Grocery list',
    value: 'get apples and Blue Bell ice cream',
    color: 'blue'
  };
  isChecked: boolean = false;

  onNoteChecked(note: {}) {
    this.isChecked = true;
  }
}
