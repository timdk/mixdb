/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IndexedDBMixService } from './indexeddb-mix.service';

describe('IndexeddbMixService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndexedDBMixService]
    });
  });

  it('should ...', inject([IndexedDBMixService], (service: IndexedDBMixService) => {
    expect(service).toBeTruthy();
  }));
});
