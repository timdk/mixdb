/* tslint:disable:no-unused-variable */
import { NO_ERRORS_SCHEMA }          from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './auth.service';
import { FakeAuthService } from '../testing/fake-auth.service';
import { RouterOutletStubComponent, RouterLinkStubDirective } from '../testing/router-stubs';

describe('AppComponent', () => {  

  let fixture: ComponentFixture<AppComponent>;
  let comp:    AppComponent;
  let authService: AuthService;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        NgbModule.forRoot()
      ],
      declarations: [
        AppComponent,
        RouterLinkStubDirective
      ],
      providers: [{ provide: AuthService, useClass: FakeAuthService }],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance; // AppComponent test instance
    authService = fixture.debugElement.injector.get(AuthService);
  });

  it('should create the app', async(() => {
    expect(comp).toBeTruthy();
  }));

  it(`should have as title 'MixDB'`, async(() => {
    expect(comp.title).toEqual('MixDB');
  }));

  it('should have a main navbar', async(() => {
    fixture.detectChanges();

    let navbar = fixture.debugElement.query(By.css('nav#main-nav'));
    expect(navbar).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('MixDB');
  }));
});
