import { Injectable } from '@angular/core';
import { Song } from './song';

/**
 * Song Service Class-Interface for Angular dependency injection
 */
@Injectable()
export abstract class SongService {

	/**
	 * Get a song by its ID.
	 * 
	 * @abstract
	 * @param {string} id
	 * @returns {Promise<Song>}
	 * 
	 * @memberOf SongService
	 */
	abstract get(id: string): Promise<Song>;

	/**
	 * Create or update a song.
	 * 
	 * @abstract
	 * @param {Song} song
	 * @returns {Promise<Song>}
	 * 
	 * @memberOf SongService
	 */
	abstract save(song: Song): Promise<Song>;

	/**
	 * Get all the songs in a Library by its ID. 
	 * 
	 * @param {string} libraryId
	 * @returns {Promise<Song[]>}
	 */
	abstract getSongs(libraryId: string): Promise<Song[]>;
	
}