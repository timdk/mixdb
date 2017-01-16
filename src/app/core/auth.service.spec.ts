/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterStub } from '../../testing/router-stubs';

import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { FakeUserService } from '../../testing/fake-user.service'

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

    it('should store the currently logged in user', () => {
        expect(true).toBe(false, 'test not implemented');
    });

    it('should clear all details on logout', () => {
        expect(true).toBeFalsy('test not implemented');
    });

    it('should autologin when a user is saved', () => {
        expect(true).toBeFalsy('test not implemented');
    });


});
