import { Injectable } from '@angular/core';

import { IndexedDBService, IndexedDBStorage } from '../core/indexeddb.service';
import { SongService } from './song.service';
import { Song } from './song';

/**
 * Return values from IndexedDBStorage are wrapped in Promise.resolve() because Dexie's promise class
 * doesn't have the toStringTag property on it. There is a fix on github but it hasn't been rolled into
 * a release version yet.
 */
/**
 * An IndexedDB implementation of SongService.
 * 
 * @export
 * @class IndexedDBSongService
 * @implements {SongService}
 */
@Injectable()
export class IndexedDBSongService implements SongService {
	private db: IndexedDBStorage;

	/**
	 * Creates an instance of IndexedDBSongService.
	 * 
	 * @param {IndexedDBService} indexedDbService
	 * 
	 * @memberOf IndexedDBSongService
	 */
	constructor(private indexedDbService: IndexedDBService) {
		this.db = indexedDbService.getDatabase();
	}

	/**
	 * Get a song by its ID.
	 * 
	 * @param {string} id
	 * @returns {Promise<Song>}
	 * 
	 * @memberOf IndexedDBSongService
	 */
	get(id: string): Promise<Song> {
		return Promise.resolve(
			this.db.songs.get(id)
			.then(song => Song.fromJSON(song))
		);
	}

	/**
	 * Create or update a song.
	 * 
	 * @param {Song} song
	 * @returns {Promise<Song>}
	 * 
	 * @memberOf IndexedDBSongService
	 */
	save(song: Song): Promise<Song> {
		return Promise.resolve(
			this.db.songs.put(song.toJSON())
		);
	}

	/**
	 * Get all the songs in a Library by its ID. 
	 * 
	 * @param {string} libraryId
	 * @returns {Promise<Song[]>}
	 * 
	 * @memberOf IndexedDBSongService
	 */
	getSongs(libraryId: string): Promise<Song[]> {
		let songs: Song[] = [];
		
		return Promise.resolve(
			this.db.librarySongs
			.where('libraryId').equals(libraryId)
			.toArray(idPairs => {
				let songIds: string[] = [];
				for (let i = 0; i < idPairs.length; i++) {
					songIds.push(idPairs[i].songId);
				}
				return songIds;
			})
			.then(songIds => this.db.songs.where('id').anyOf(songIds).toArray())
		);
	}

	delete(song: Song): Promise<Song> {
		return Promise.resolve(
			this.db.songs.delete(song.id)
			.then(() => this.db.librarySongs
						.where('songId').equals(song.id)
						.delete())
			.then(() => song)
		);
	}

}