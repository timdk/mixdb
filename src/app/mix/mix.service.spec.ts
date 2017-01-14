/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MixService } from './mix.service';

describe('MixService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MixService]
    });
  });

  it('should ...', inject([MixService], (service: MixService) => {
    expect(service).toBeTruthy();
  }));
});
