/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthGuard } from './auth-guard.service';

import { AuthService } from './auth.service';
import { Router,   ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FakeAuthService } from '../../testing/fake-auth.service';
import { RouterStub } from '../../testing/router-stubs';



class RouterStateSnapshotStub {
    root;
    url : string
    toString(): string { return this.url }

    constructor(url) { this.url = url; }
}


describe('AuthGuard', () => {

    const globalRoutes = [
        '/login'
    ];
    const authenticatedRoutes = [
        '/dashboard',
        '/library',
        '/mixes',
        '/mix',
        '/mix/a-fake-mix-id',
        '/song',
        '/song/a-fake-song-id'
    ];
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                AuthGuard,
                { provide: Router, useClass: RouterStub },
                { provide: AuthService, useClass: FakeAuthService },
            ]
        });
    });

    

    it('should be creatable', inject([AuthGuard], (service: AuthGuard) => {
        expect(service).toBeTruthy();
    }));

    it ('should only allow activation of the login component when unauthenticated', 
            inject([AuthGuard, AuthService], (service: AuthGuard, authService: AuthService) => {
        
        authService.logout();
        for(let route of globalRoutes) {
            let canActivateResult = service.canActivate(new ActivatedRouteSnapshot(), new RouterStateSnapshotStub(route));
            expect(canActivateResult).toBe(true);
        }

        for(let route of authenticatedRoutes) {
            let canActivateResult = service.canActivate(new ActivatedRouteSnapshot(), new RouterStateSnapshotStub(route));
            expect(canActivateResult).toBe(false);
        }

    }));

    it('should allow activation of all routes when authenticated',
               inject([AuthGuard, AuthService], (service: AuthGuard, authService: AuthService) => {
        
        for(let route of globalRoutes) {
            expect(service.canActivate(new ActivatedRouteSnapshot(), new RouterStateSnapshotStub(route))).toBe(true);
        }

        for(let route of authenticatedRoutes) {
            expect(service.canActivate(new ActivatedRouteSnapshot(), new RouterStateSnapshotStub(route))).toBe(true);
        }

    }));
});
