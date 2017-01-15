import { Injectable } from '@angular/core';

import { MixService } from './mix.service';
import { AuthService } from '../core/auth.service';
import { IndexedDBService, IndexedDBStorage } from '../core/indexeddb.service';

import { Mix } from './mix';
import { Song } from '../song/song';

@Injectable()
export class IndexedDBMixService implements MixService {
    private db: IndexedDBStorage;

    constructor(
        private authService: AuthService,
        private indexedDBService: IndexedDBService
    ) { 
        this.db = indexedDBService.getDatabase();
    }

    getMix(id: string): Promise<Mix> {
        return this.db.mixes.get(id)
        .then(mixJSON => { return mixJSON as Mix; });
    }

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

    addSong(mix: Mix, song: Song): Promise<any> {
        return Promise.resolve();
    }

    removeSong(mix: Mix, song: Song): Promise<any> {
        return Promise.resolve();
    }

    deleteMix(mix: Mix): Promise<any> {
        return this.db.mixes.delete(mix.id)
        .then(() => { return mix });
    }


}
