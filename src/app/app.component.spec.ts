/* tslint:disable:no-unused-variable */
import { NO_ERRORS_SCHEMA }          from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { AppComponent } from './app.component';

describe('AppComponent', () => {  

  let fixture: ComponentFixture<AppComponent>;
  let comp:    AppComponent;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance; // AppComponent test instance
  });

  it('should create the app', async(() => {
    expect(comp).toBeTruthy();
  }));

  it(`should have as title 'MixDB'`, async(() => {
    expect(comp.title).toEqual('MixDB');
  }));

  it('should have a main navbar', async(() => {
    fixture.detectChanges();
    let navbar = fixture.debugElement.query(By.css('mixdb-nav'));
    expect(navbar).toBeTruthy();
  }));

  it('should have a router outlet', () => {
    fixture.detectChanges();
    let outlet = fixture.debugElement.query(By.css('router-outlet'));
    expect(outlet).toBeTruthy();
  })

});
