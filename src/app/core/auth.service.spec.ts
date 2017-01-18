/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterStub } from '../../testing/router-stubs';

import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { FakeUserService } from '../../testing/fake-user.service'

import 'rxjs/add/operator/toPromise';

describe('AuthService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
        providers: [
            AuthService,
            { provide: UserService, useClass: FakeUserService },
            { provide: Router, useClass: RouterStub}
        ]
        });
    });

    it('should be creatable', inject([AuthService], (authService: AuthService) => {
        expect(authService).toBeTruthy();
    }));

    it('should store store a user after login', done => {
        inject([AuthService], (authService: AuthService) => {
            expect(authService.getCurrentUser()).toBeUndefined();
            authService.login('Test User').toPromise()
            .then(() => {
                expect(authService.isLoggedIn).toBe(true);
                expect(authService.getCurrentUser()).toEqual({ name: 'Test User' });
                done();
            });
        })();  
    });

    it('should clear all details on logout', done => {
        inject([AuthService], (authService: AuthService) => {
            authService.redirectUrl = '/dashboard';
            authService.login('Test User').toPromise()
            .then(() => {
                expect(authService.isLoggedIn).toBe(true);
                authService.logout();
                expect(authService.isLoggedIn).toBe(false, 'logged in flag should be false');
                expect(authService.getCurrentUser()).toBeUndefined('current user should be cleared');
                expect(authService.redirectUrl).toBeUndefined('redirect url should be cleared');
                done();
            });
        })();
    });

    it('should autologin when a user is saved', done => {
        inject([AuthService], (authService: AuthService) => {
            expect(authService.isLoggedIn).toBeFalsy();
            authService.login('Test User', true).toPromise()
            .then(() => {
                authService.isLoggedIn = false;
                return authService.autoLogin().toPromise()
            })
            .then(result => {
                expect(result).toBeTruthy();
                expect(authService.getCurrentUser()).toEqual({ name: 'Test User' });
                done();
            });
        })();
    });


});
