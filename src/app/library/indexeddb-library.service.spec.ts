/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IndexedDBLibraryService } from './indexeddb-library.service';
import { IndexedDBService, IndexedDBStorage } from '../core/indexeddb.service';

import { AuthService } from '../core/auth.service'
import { UserService } from '../user/user.service';
import { SongService } from '../song/song.service';


import { FakeAuthService } from '../../testing/fake-auth.service'
import { FakeUserService } from '../../testing/fake-user.service';
import { FakeSongService } from '../../testing/fake-song.service';



describe('IndexedDBLibraryService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
        providers: [
            IndexedDBLibraryService,
            IndexedDBService,
            IndexedDBStorage,
            { provide: AuthService, useClass: FakeAuthService },
            { provide: UserService, useClass: FakeUserService },
            { provide: SongService, useClass: FakeSongService },
        ]
        });
    });

    it('should ...', inject([IndexedDBLibraryService], (service: IndexedDBLibraryService) => {
        expect(service).toBeTruthy();
    }));

    it('should retreive a user library', () => {
        expect(true).toBeFalsy('test not implemented');
    });

    it('should store a new library', () => {
        expect(true).toBeFalsy('test not implemented');
    });

    it('should update an existing library', () => {
        expect(true).toBeFalsy('test not implemented');
    });

    it('should add a song to a library', () => {
        expect(true).toBeFalsy('test not implemented');
    });

    it('should remove a song from a library', () => {
        expect(true).toBeFalsy('test not implemented');
    });

    it('should be able to delete all traces of a song', () => {
        expect(true).toBeFalsy('test not implemented');
    });
});
