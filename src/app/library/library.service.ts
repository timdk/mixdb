import { Injectable } from '@angular/core';

import { Library } from './library';
import { Song } from '../song/song';

/**
 * Library Service Class-Interface for Angular dependency injection
 * 
 * @export
 * @abstract 
 * @class LibraryService
 */
@Injectable()
export abstract class LibraryService {
	
	/**
	 * Get the library for a user. If the there is no assiciated library
	 * create one and assign it to the user.
	 * @param  {string}           username
	 * @return {Promise<Library>}          A Promise that resolves with the user's library.
	 */
	abstract getLibrary(username?: string): Promise<Library>;
	
	/**
	 * Store a library against its library id
	 * @param  {Library}      library 
	 * @return {Promise<any>}         A promise that resolves upon success or rejects on error.
	 */
	abstract save(library: Library): Promise<any>;

	/**
	 * Get the songs for a given library ID
	 * @param  {string}          libraryId
	 * @return {Promise<Song[]>}           A promise that resolves with an array of Songs.
	 */
	abstract getSongs(libraryId?: string): Promise<Song[]>;

	/**
	 * Create or update a song and add it to a user's library.
	 * @param  {Library}       library 
	 * @param  {Song}         song      
	 * @return {Promise<any>}           A promise that resolves on success or rejects on error.
	 */
	abstract addSong(library: Library, song: Song): Promise<any>;
	
	/**
	 * Remove a song from a library.
	 * 
	 * @abstract
	 * @param {Library} library
	 * @param {Song} song
	 * @returns {Promise<any>}
	 * 
	 * @memberOf LibraryService
	 */
	abstract removeSong(library: Library, song: Song): Promise<any>;

	/**
	 * Delete a song and then remove it from all libraries
	 * 
	 * @abstract
	 * @param {Song} song
	 * @returns {Promise<any>}
	 * 
	 * @memberOf LibraryService
	 */
	abstract deleteSong(song: Song): Promise<any>;

}