import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

let comp: AppComponent;
let fixture: ComponentFixture<AppComponent>;

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [ RouterTestingModule ]
    });
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
  });

  it ('should instantiate component', () => {
    expect(comp instanceof AppComponent).toBe(true, 'should create AppComponent');
  });

  // ToDo test router outlet
});
