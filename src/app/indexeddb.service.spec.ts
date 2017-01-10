/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IndexeddbService } from './indexeddb.service';

describe('IndexeddbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndexeddbService]
    });
  });

  it('should ...', inject([IndexeddbService], (service: IndexeddbService) => {
    expect(service).toBeTruthy();
  }));
});
