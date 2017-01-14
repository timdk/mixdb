/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IndexeddbMixService } from './indexeddb-mix.service';

describe('IndexeddbMixService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndexeddbMixService]
    });
  });

  it('should ...', inject([IndexeddbMixService], (service: IndexeddbMixService) => {
    expect(service).toBeTruthy();
  }));
});
