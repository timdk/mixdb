/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IndexeddbLibraryService } from './indexeddb-library.service';

describe('IndexeddbLibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndexeddbLibraryService]
    });
  });

  it('should ...', inject([IndexeddbLibraryService], (service: IndexeddbLibraryService) => {
    expect(service).toBeTruthy();
  }));
});
