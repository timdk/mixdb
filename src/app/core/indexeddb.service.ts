import { Injectable } from '@angular/core';

import Dexie from 'dexie';

import { UserJSON } from '../user/user';
import { LibraryJSON, LibrarySong } from '../library/library';
import { SongJSON } from '../song/song';
import { MixJSON } from '../mix/mix';

/** 
 * Injectable service provides shared access 
 * to the Dexie wrapper around IndexedDB storage.
 * 
 * @export
 * @class IndexedDBService
 */
@Injectable()
export class IndexedDBService {

	private db: IndexedDBStorage; 

	/**
	 * Creates an instance of IndexedDBService.
	 * @memberOf IndexedDBService
	 */
	constructor() {
		this.db = new IndexedDBStorage();
	}

	/**
	 * Get the instance of Dexie
	 * @return {IndexedDBStorage}
	 */
	getDatabase(): IndexedDBStorage {
		return this.db;
	}

}


/**
 * This class defines the IndexedDB tables, their types and their indexes.
 * It is not intended to be accessed directly; use IndexedDBService to access the
 * singleton instance.
 * 
 * @export
 * @class IndexedDBStorage
 * @extends {Dexie}
 */
export class IndexedDBStorage extends Dexie {
	
	users: Dexie.Table<UserJSON, string>;
	libraries: Dexie.Table<LibraryJSON, string>;
	librarySongs: Dexie.Table<LibrarySong, string>;
	songs: Dexie.Table<SongJSON, string>;
	mixes: Dexie.Table<MixJSON, string>;

	/**
	 * Creates an instance of IndexedDBStorage.
	 * Initialises IndexedDB storage via Dexie and defines the table indices.
	 * 
	 * @memberOf IndexedDBStorage
	 */
	constructor () {
		super('MixDB');
		this.version(1).stores({
			// List tables and their indexes. First index is the primary key.
			users: 'name, id',
			libraries: 'id, userId',
			librarySongs: '++, [libraryId+songId], libraryId, songId',
			songs: 'id, artist, title, tempo, key',
			mixes: 'id, userId'
		});
	}
	
}

