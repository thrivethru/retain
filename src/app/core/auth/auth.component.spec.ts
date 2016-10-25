import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';

import { click, newEvent, RouterStub } from '../../../../config/testing';
import { AuthService } from './';
import { SharedModule } from '../../shared';
import { AuthComponent } from './auth.component';

let comp: AuthComponent;
let fixture: ComponentFixture<AuthComponent>;

class AuthServiceStub {
 // authenticate(path: string, creds: Object): void {}; // ToDo: add a return observable
  authenticate(path: string, creds: Object): Observable<any> {
    //const response = {token: 'blahToken', data: {id: 1, email: 'blah@blah.com'}};
    return Observable.of(new Object()).map(response => JSON.stringify(response));
  }
};

describe('AuthComponent', () => {
  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthComponent ],
      imports: [
        RouterTestingModule,
        SharedModule
      ],
      providers: [
        { provide: Router, useClass: RouterStub }
      ]
    })
    .overrideComponent(AuthComponent, {
      set: {
        providers: [
          { provide: AuthService, useClass: AuthServiceStub }
        ]
      }
    });
  }));

  let authS: AuthServiceStub;
  let router: RouterStub;

  beforeEach( async(() => {
    fixture = TestBed.createComponent(AuthComponent);
    comp = fixture.componentInstance;
    // get the component's injected AuthServiceStub
    authS = fixture.debugElement.injector.get(AuthService);
    router = fixture.debugElement.injector.get(Router);
    fixture.detectChanges();
  }));

  it ('should instantiate component', () => {
    expect(comp instanceof AuthComponent).toBe(true, 'should create AuthComponent');
  });

  it ('mode should start as signin', () => {
    expect(comp.mode).toBe('signin', 'start mode as signin');
  });

  it ('mode should change to signup after click', () => {
    let link = fixture.debugElement.query(By.css('.link')).nativeElement;
    click(link);
    expect(comp.mode).toBe('signup', 'mode changed to signup');
  });

  it('should not let you click button when form is invalid', fakeAsync(() => {
    spyOn(comp, 'authenticate').and.callThrough();
    let button = fixture.debugElement.query(By.css('button')).nativeElement;

    click(button);

    expect(comp.authenticate).not.toHaveBeenCalled();
  }));

  it('should let you click button and call authenticate when form is valid', fakeAsync(() => {
    //comp.authenticate ={}
    spyOn(comp, 'authenticate').and.callThrough();
    const testVal = {
      email: 'blah@blah.com',
      password: 'blah'
    };
    let inEmail = fixture.debugElement.query(By.css('[type="email"]')).nativeElement;
    let inPass = fixture.debugElement.query(By.css('[type="password"]')).nativeElement;
    let button = fixture.debugElement.query(By.css('button')).nativeElement;

    // simulate user entering new values into the input box
    inEmail.value = testVal.email;
    inPass.value = testVal.password;

    // dispatch a DOM event so that Angular learns of input value change.
    inEmail.dispatchEvent(newEvent('input'));
    inPass.dispatchEvent(newEvent('input'));

    fixture.detectChanges();

    click(button);
    tick();

    expect(comp.authenticate).toHaveBeenCalled();
  }));

  // ToDo: test router.navigate in authenticate
});
