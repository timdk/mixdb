/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IndexeddbSongService } from './indexeddb-song.service';

describe('IndexeddbSongService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndexeddbSongService]
    });
  });

  it('should ...', inject([IndexeddbSongService], (service: IndexeddbSongService) => {
    expect(service).toBeTruthy();
  }));
});
