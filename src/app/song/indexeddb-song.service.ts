import { Injectable } from '@angular/core';

import { IndexedDBService, IndexedDBStorage } from '../core/indexeddb.service';
import { SongService } from './song.service';
import { Song } from './song';

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
		return this.db.songs.get(id)
		.then(song => Song.fromJSON(song))
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
		return this.db.songs.put(song.toJSON())
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
		
		return this.db.librarySongs
		.where('libraryId').equals(libraryId)
		.toArray(idPairs => {
			let songIds: string[] = [];
			for (let i = 0; i < idPairs.length; i++) {
				songIds.push(idPairs[i].songId);
			}
			return songIds;
		})
		.then(songIds => this.db.songs.where('id').anyOf(songIds).toArray())
	}

	
	/**
	 * Delete a song and remove it from all libraries.
	 * 
	 * @param {Song} song
	 * @returns {Promise<Song>}
	 * 
	 * @memberOf IndexedDBSongService
	 */
	delete(song: Song): Promise<Song> {
		return this.db.songs.delete(song.id)
		.then(() => this.db.librarySongs
					.where('songId').equals(song.id)
					.delete())
		.then(() => song)
	}

}