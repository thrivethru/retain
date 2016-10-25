import { TestBed, ComponentFixture } from '@angular/core/testing';

import { AboutComponent } from './about.component';

let comp: AboutComponent;
let fixture: ComponentFixture<AboutComponent>;

describe('AboutComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    });
    fixture = TestBed.createComponent(AboutComponent);
    comp = fixture.componentInstance;
  });

  it ('should instantiate component', () => {
    expect(comp instanceof AboutComponent).toBe(true, 'should create AboutComponent');
  });
});
