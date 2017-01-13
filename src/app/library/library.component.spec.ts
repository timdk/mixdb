/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LibraryComponent } from './library.component';

import { Router } from '@angular/router';
import { RouterStub } from '../../testing/router-stubs';

import { LibraryService } from '../library.service';
import { FakeLibraryService } from '../../testing/fake-library.service';

import { Library } from '../library';
import { Song } from '../song';

import { TableComponent } from '../table/table.component'
import { NG_TABLE_DIRECTIVES } from 'ng2-table/ng2-table';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('LibraryComponent', () => {
  let component: LibraryComponent;
  let fixture: ComponentFixture<LibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgbModule.forRoot()
      ],
      declarations: [ 
        LibraryComponent,
        NG_TABLE_DIRECTIVES,
        TableComponent
        
      ],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: LibraryService, useClass: FakeLibraryService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
