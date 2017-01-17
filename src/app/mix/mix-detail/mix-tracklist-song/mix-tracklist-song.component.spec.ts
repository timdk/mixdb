/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MixTracklistSongComponent } from './mix-tracklist-song.component';

describe('MixTracklistSongComponent', () => {
  let component: MixTracklistSongComponent;
  let fixture: ComponentFixture<MixTracklistSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixTracklistSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixTracklistSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
