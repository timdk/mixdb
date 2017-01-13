/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IndexedDBUserService } from './indexeddb-user.service';
import { IndexedDBService, IndexedDBStorage } from './indexeddb.service';

describe('IndexedDBUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndexedDBUserService,
        IndexedDBService, IndexedDBStorage
      ]
    });
  });

  it('should ...', inject([IndexedDBUserService], (service: IndexedDBUserService) => {
    expect(service).toBeTruthy();
  }));
});
