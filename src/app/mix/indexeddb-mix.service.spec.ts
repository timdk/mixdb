/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';

import { IndexedDBMixService } from './indexeddb-mix.service';
import { AuthService } from '../core/auth.service';
import { FakeAuthService } from '../../testing/fake-auth.service';

describe('IndexedDBMixService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
        providers: [
            IndexedDBMixService, 
            { provide: AuthService, useClass: FakeAuthService }]
        });
    });

    it('should ...', inject([IndexedDBMixService], (service: IndexedDBMixService) => {
        expect(service).toBeTruthy();
    }));

    it('should save a new mix', () => {
        expect(true).toBeFalsy('test not implemented');
    });

    it('should update an existing mix', () => {
        expect(true).toBeFalsy('test not implemented');
    });

    it('should get the mixes for a user', () => {
        expect(true).toBeFalsy('test not implemented');
    });

    it('should add a song to a mix', () => {
        expect(true).toBeFalsy('test not implemented');
    });

    it('should remove a song from a mix ', () => {
        expect(true).toBeFalsy('test not implemented');
    });

    it('should delete a mix completely', () => {
        expect(true).toBeFalsy('test not implemented');
    });
});
