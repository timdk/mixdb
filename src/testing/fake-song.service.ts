//import { Injectable } from '@angular/core';
import { Song, SongJSON } from '../app/song';

/**
 * Song Service Class-Interface for Angular dependency injection
 */
//@Injectable()
export class FakeSongService {

    expectedSong: Song = Song.fromJSON({
        id: "87e4a28a-9198-fb00-cf2f-b25fa30544fc",
        artist: "Akcept",
        title: "3:07",
        key: "",
        tempo: 140
    } as SongJSON);


	/**
	 * Get a song by its ID.
	 * 
	 * @abstract
	 * @param {string} id
	 * @returns {Promise<Song>}
	 * 
	 * @memberOf SongService
	 */
	get(id: string): Promise<Song> {
        return Promise.resolve(this.expectedSong);
    }

	/**
	 * Create or update a song.
	 * 
	 * @abstract
	 * @param {Song} song
	 * @returns {Promise<Song>}
	 * 
	 * @memberOf SongService
	 */
	//save(song: Song): Promise<Song>;

	/**
	 * Get all the songs in a Library by its ID. 
	 * 
	 * @param {string} libraryId
	 * @returns {Promise<Song[]>}
	 */
	//getSongs(libraryId: string): Promise<Song[]>;

	/**
	 * Delete a song and remove it from all libraries.
	 * 
	 * @abstract
	 * @param {Song} song
	 * @returns {Promise<any>}
	 * 
	 * @memberOf SongService
	 */
	//delete(song: Song): Promise<any>;
	
}