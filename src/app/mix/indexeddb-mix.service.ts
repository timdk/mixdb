import { Injectable } from '@angular/core';

import { MixService } from './mix.service';
import { AuthService } from '../core/auth.service';
import { IndexedDBService, IndexedDBStorage } from '../core/indexeddb.service';

import { Mix } from './mix';
import { Song } from '../song/song';

/**
 * The IndexedDB Implementation of MixService
 * @export
 * @class IndexedDBMixService
 * @implements {MixService}
 */
@Injectable()
export class IndexedDBMixService implements MixService {
    private db: IndexedDBStorage;

    /**
     * Creates an instance of IndexedDBMixService.
     * 
     * @param {AuthService} authService
     * @param {IndexedDBService} indexedDBService
     * 
     * @memberOf IndexedDBMixService
     */
    constructor(
        private authService: AuthService,
        private indexedDBService: IndexedDBService
    ) { 
        this.db = indexedDBService.getDatabase();
    }

    /**
     * Get a mix by its ID.
     * 
     * @param {string} id
     * @returns {Promise<Mix>}
     * 
     * @memberOf IndexedDBMixService
     */
    getMix(id: string): Promise<Mix> {
        return this.db.mixes.get(id)
        .then(mixJSON => { return mixJSON as Mix; });
    }

    /**
     * Get the mixes for a user.
     * 
     * @param {string} [username]   Defaults to current user's name if not supplied.
     * @returns {Promise<Mix[]>}
     * 
     * @memberOf IndexedDBMixService
     */
    getMixes(username?: string): Promise<Mix[]> {
        if (!username) {
            if (this.authService.isLoggedIn) {
                username = this.authService.getCurrentUser().name;
            } else {
                throw new Error('MixService: No username supplied and no current user authenticated');
            }
        }
        // In future when you can share and view friends' mixes we'll
        // look up the the userId for the username but for now grab the userId
        // from the currentUser.
        let user = this.authService.getCurrentUser();
        return this.db.mixes
        .where('userId').equals(user.id)
        .toArray()
        .then(mixJSONs => {
            let mixes: Mix[] = [];
            mixJSONs.forEach(mixJSON => {
                let mix: Mix = mixJSON as Mix;
                mixes.push(mix);
            });
            return mixes;
        });
    }

    
    /**
     * Save a mix.
     * 
     * @param {Mix} mix
     * @returns {Promise<any>}
     * 
     * @memberOf IndexedDBMixService
     */
    saveMix(mix: Mix): Promise<any> {
        if (!this.authService.isLoggedIn) {
            throw new Error('MixService: Must be logged in to save a mix');
        } else if (typeof mix.userId === 'string' &&
                mix.userId !== this.authService.getCurrentUser().id) {
            throw new Error('MixService: Cannot edit another user\'s mix');
        }
        mix.userId = this.authService.getCurrentUser().id;
        mix.modifiedDate = new Date();
        return this.db.mixes.put(mix)
        .then(() => { return mix });
    }

    
    /**
     * Add a song to a mix.
     * 
     * @param {Mix} mix
     * @param {Song} song
     * @returns {Promise<any>}
     * 
     * @memberOf IndexedDBMixService
     */
    addSong(mix: Mix, song: Song): Promise<any> {
        return Promise.resolve(); // At the moment Songs are stored directly on the mix.
    }

    /**
     * Remove a song from a mix.
     * 
     * @param {Mix} mix
     * @param {Song} song
     * @returns {Promise<any>}
     * 
     * @memberOf IndexedDBMixService
     */
    removeSong(mix: Mix, song: Song): Promise<any> {
        return Promise.resolve(); // At the moment Songs are stored directly on the mix.
    }
    
    /**
     * Delete a mix completely.
     * 
     * @param {Mix} mix
     * @returns {Promise<any>}
     * 
     * @memberOf IndexedDBMixService
     */
    deleteMix(mix: Mix): Promise<any> {
        return this.db.mixes.delete(mix.id)
        .then(() => { return mix });
    }


}
