/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IndexedDBLibraryService } from './indexeddb-library.service';
import { IndexedDBService, IndexedDBStorage } from '../core/indexeddb.service';

import { AuthService } from '../core/auth.service'
import { UserService } from '../user/user.service';
import { SongService } from '../song/song.service';


import { FakeAuthService } from '../../testing/fake-auth.service'
import { FakeUserService } from '../../testing/fake-user.service';
import { FakeSongService } from '../../testing/fake-song.service';



describe('IndexedDBLibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        IndexedDBLibraryService,
        IndexedDBService,
        IndexedDBStorage,
        { provide: AuthService, useClass: FakeAuthService },
        { provide: UserService, useClass: FakeUserService },
        { provide: SongService, useClass: FakeSongService },
      ]
    });
  });

  it('should ...', inject([IndexedDBLibraryService], (service: IndexedDBLibraryService) => {
    expect(service).toBeTruthy();
  }));
});