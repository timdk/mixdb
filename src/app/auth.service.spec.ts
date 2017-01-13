/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterStub } from '../testing/router-stubs';

import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { FakeUserService } from '../testing/fake-user.service'

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: UserService, useClass: FakeUserService },
        { provide: Router,         useClass: RouterStub}
      ]
    });
  });

  it('should be creatable', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
