/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthGuard } from './auth-guard.service';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { FakeAuthService } from '../../testing/fake-auth.service';
import { RouterStub } from '../../testing/router-stubs';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: Router, useClass: RouterStub },
        { provide: AuthService, useClass: FakeAuthService },
      ]
    });
  });

  it('should ...', inject([AuthGuard], (service: AuthGuard) => {
    expect(service).toBeTruthy();
  }));
});
