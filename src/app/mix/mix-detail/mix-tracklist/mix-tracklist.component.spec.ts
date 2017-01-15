/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MixTracklistComponent } from './mix-tracklist.component';

describe('MixTracklistComponent', () => {
  let component: MixTracklistComponent;
  let fixture: ComponentFixture<MixTracklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixTracklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixTracklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
