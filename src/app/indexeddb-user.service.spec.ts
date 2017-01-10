/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IndexeddbUserService } from './indexeddb-user.service';

describe('IndexeddbUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndexeddbUserService]
    });
  });

  it('should ...', inject([IndexeddbUserService], (service: IndexeddbUserService) => {
    expect(service).toBeTruthy();
  }));
});
