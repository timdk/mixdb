/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IndexedDBSongService } from './indexeddb-song.service';
import { IndexedDBService, IndexedDBStorage } from './indexeddb.service';

describe('IndexedDBSongService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndexedDBSongService,
        IndexedDBService, IndexedDBStorage
      ]
    });
  });

  it('should ...', inject([IndexedDBSongService], (service: IndexedDBSongService) => {
    expect(service).toBeTruthy();
  }));
});
