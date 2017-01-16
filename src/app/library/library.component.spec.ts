/* tslint:disable:no-unused-variable */
import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { Output, EventEmitter } from '@angular/core'; // For LibraryTableComponetStub

import { LibraryComponent } from './library.component';

import { Router } from '@angular/router';
import { RouterStub } from '../../testing/router-stubs';

import { LibraryService } from './library.service';
import { FakeLibraryService } from '../../testing/fake-library.service';

import { Library } from './library';
import { Song } from '../song/song';

import { LibraryTableComponent } from './library-table/library-table.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // Bootstrap 

// Testing Stub for emitting events -- edit: doesn't work due to nested TableComponent
// class LibraryTableComponent {
//   @Output() cellClicked = new EventEmitter<any>();
//   onCellClick(data: any) {
//     this.cellClicked.emit(data);
//   }
// }

describe('LibraryComponent', () => {
  let component: LibraryComponent;
  let fixture: ComponentFixture<LibraryComponent>;
  let expectedSong: Song;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgbModule.forRoot()
      ],
      declarations: [ 
        LibraryComponent,
        LibraryTableComponent
      ],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: LibraryService, useClass: FakeLibraryService }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryComponent);
    component = fixture.componentInstance;
    expectedSong = {
      id: "87e4a28a-9198-fb00-cf2f-b25fa30544fc",
      artist: "Akcept",
      title: "3:07",
      key: "",
      tempo: 140
    } as Song;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add songs to a library', () => {
        expect(true).toBeFalsy('test not implemented');
    });

  it('should have a LibraryTableComponent', () => {
    let tableComponent = fixture.debugElement.query(By.css('library-table'));
    expect(tableComponent).toBeTruthy();
  });

  it('should navigate to a SongDetail when the LibraryTable emits a click event',
    inject([Router], (router: Router) => {
      const spy = spyOn(router, 'navigate');
      let eventData = {
        row: expectedSong,
        column: 'artist'
      }
      component.onCellClick(eventData);
      const navArgs = spy.calls.first().args[0];
      expect(navArgs).toEqual(['/song', expectedSong.id ]);
  }));
});
