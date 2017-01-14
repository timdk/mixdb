/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { SongDetailComponent } from './song-detail.component';
import { Song, SongJSON } from '../song';

import { Router, ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub, RouterStub } from '../../../testing/router-stubs'

import { SongService } from '../song.service';
import { FakeSongService } from '../../../testing/fake-song.service';

describe('SongDetailComponent', () => {
  let component: SongDetailComponent;
  let fixture: ComponentFixture<SongDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ SongDetailComponent ],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
        { provide: SongService, useClass: FakeSongService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongDetailComponent);
    component = fixture.componentInstance;

    let expectedSong = Song.fromJSON({
      id: "87e4a28a-9198-fb00-cf2f-b25fa30544fc",
      artist: "Akcept",
      title: "3:07",
      key: "",
      tempo: 140
    } as SongJSON);

    component.song = expectedSong;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
