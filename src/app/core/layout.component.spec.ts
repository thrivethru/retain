import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { LayoutComponent } from './layout.component';

let comp: LayoutComponent;
let fixture: ComponentFixture<LayoutComponent>;

describe('LayoutComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutComponent ],
      imports: [
        RouterTestingModule
      ],
      schemas: [ NO_ERRORS_SCHEMA ] //To disregard app-bar component with AuthService
    });
    fixture = TestBed.createComponent(LayoutComponent);
    comp = fixture.componentInstance;
  });

  it ('should instantiate component', () => {
    expect(comp instanceof LayoutComponent).toBe(true, 'should create LayoutComponent');
  });

  // ToDo test router outlet
});
