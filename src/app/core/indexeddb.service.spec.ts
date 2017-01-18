/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IndexedDBService, IndexedDBStorage } from './indexeddb.service';

import { Dexie } from 'dexie';

describe('IndexedDBService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
        providers: [IndexedDBService, IndexedDBStorage ]
        });
    });

    it('should be creatable', inject([IndexedDBService], (service: IndexedDBService) => {
        expect(service).toBeTruthy();
    }));

    it('should provide an instance of Dexie', inject([IndexedDBService], (service: IndexedDBService) => {
        let instanceOfDexie = service.getDatabase() instanceof Dexie;
        expect(instanceOfDexie).toBeTruthy();
    }));

    it('should have a Users table',
        inject([IndexedDBService], (service: IndexedDBService) => {
        expect(service.getDatabase().users).toBeTruthy();
    }));

    it('should have a Songs table',
        inject([IndexedDBService], (service: IndexedDBService) => {
            expect(service.getDatabase().songs).toBeTruthy();
    }));

    it('should have a Libraries table',
        inject([IndexedDBService], (service: IndexedDBService) => {
            expect(service.getDatabase().libraries).toBeTruthy();
    }));

    it('should have a Mixes table',
        inject([IndexedDBService], (service: IndexedDBService) => {
            expect(service.getDatabase().mixes).toBeTruthy();
    }));

    it('should have a LibrarySongs table',
        inject([IndexedDBService], (service: IndexedDBService) => {
            expect(service.getDatabase().librarySongs).toBeTruthy();
    }));
});
