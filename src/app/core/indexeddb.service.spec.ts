/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IndexedDBService, IndexedDBStorage } from './indexeddb.service';

describe('IndexedDBService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
        providers: [IndexedDBService, IndexedDBStorage ]
        });
    });

    it('should be creatable', inject([IndexedDBService], (service: IndexedDBService) => {
        expect(service).toBeTruthy();
    }));

    it('should provide an instance of Dexie', () => {
        expect(true).toBeFalsy('test not implemented');
    });

    it('should have a Users table', () => {
        expect(true).toBeFalsy('test not implemented');
    });

    it('should have a Songs table', () => {
        expect(true).toBeFalsy('test not implemented');
    });

    it('should have a Libraries table', () => {
        expect(true).toBeFalsy('test not implemented');
    });

    it('should have a Mixes table', () => {
        expect(true).toBeFalsy('test not implemented');
    });

    it('should have a LibrarySongs table', () => {
        expect(true).toBeFalsy('test not implemented');
    });
});
