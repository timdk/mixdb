import { Injectable } from '@angular/core';

import { IndexedDBService, IndexedDBStorage } from '../core/indexeddb.service';
import { LibraryService } from './library.service';
import { AuthService } from '../core/auth.service'
import { UserService } from '../user/user.service';
import { SongService } from '../song/song.service';

import { Library, LibraryJSON } from './library';
import { User } from '../user/user';
import { Song } from '../song/song';

/**
 * The IndexedDB implementation of LibraryService.
 * 
 * @export
 * @class IndexedDBLibraryService
 * @implements {LibraryService}
 */
@Injectable()
export class IndexedDBLibraryService implements LibraryService {
	private db: IndexedDBStorage;

	/**
	 * Creates an instance of IndexedDBLibraryService.
	 * 
	 * @param {IndexedDBService} indexedDbService
	 * @param {UserService} userService
	 * @param {SongService} songService
	 * 
	 * @memberOf IndexedDBLibraryService
	 */
	constructor(
		private indexedDbService: IndexedDBService,
		private authService: AuthService,
		private userService: UserService,
		private songService: SongService
	) {
		this.db = indexedDbService.getDatabase();
	}

	/**
	 * Fetch the library for a user by the provided username. It defaults to the current user 
	 * if no username is provided.
	 * 
	 * @param {string} [username]
	 * @returns {Promise<Library>}
	 * 
	 * @memberOf IndexedDBLibraryService
	 */
	getLibrary(username?: string): Promise<Library> {
		// Get library, create if doesn't exist.
		// Then get all songs and add them to the library.

		if (!username) {
			if (this.authService.isLoggedIn) {
				username = this.authService.getCurrentUser().name;
			}
		}

		let user: User;
		return this.userService.getUser(username)
		.then(usr => {
			user = usr; // yuck 
			let libraryId = user.getLibraryId();
			return libraryId ? this.db.libraries.get(user.getLibraryId()) : null; 
		})
		.then((libraryJSON: LibraryJSON) => {
			// If it doesn't exist, create a new one and assign it to the user
			let library: Library;
			if (!libraryJSON) {
				library = new Library();
				this.save(library);
				user.setLibrary(library);
				this.userService.save(user);
			} else {
				library = Library.fromJSON(libraryJSON);
			}
			return this.getSongs(library.id)
			.then(songs => { 
				library.setSongs(songs); 
				return library; 
			});
		});
	}
	
	/**
	 * Create or update a library.
	 * 
	 * @param {Library} library
	 * @returns {Promise<any>}
	 * 
	 * @memberOf IndexedDBLibraryService
	 */
	save(library: Library): Promise<any> {
		return Promise.resolve(this.db.libraries.put(library.toJSON()));
	}

	/**
	 * Get the songs from a library by the libraryId.
	 * 
	 * @param {string} libraryId
	 * @returns {Promise<Song[]>}
	 * 
	 * @memberOf IndexedDBLibraryService
	 */
	getSongs(libraryId?: string): Promise<Song[]> {
		if (!libraryId) {
			libraryId = this.authService.getCurrentUser().getLibraryId();
		}
		return this.songService.getSongs(libraryId);
	}

	/**
	 * Create or update a song and add it to a library.
	 * 
	 * @param {Library} library
	 * @param {Song} song
	 * @returns {Promise<any>}
	 * 
	 * @memberOf IndexedDBLibraryService
	 */
	addSong(library: Library, song: Song): Promise<any> {
		library.add(song);
		return Promise.resolve(
			this.songService.save(song)
			.then(() => this.db.librarySongs.put({ libraryId: library.id, songId: song.id }))
		);
	}

	/**
	 * Remove a song from a library.
	 * 
	 * @param {Library} library
	 * @param {Song} song
	 * @returns
	 * 
	 * @memberOf IndexedDBLibraryService
	 */
	removeSong(library: Library, song: Song) {
		library.delete(song);
		return Promise.resolve(
			this.db.librarySongs
			.where('[libraryId+songId]')
			.equals([library.id, song.id])
			.delete()
		)
	}

	/**
	 * Delete a song and then remove it from all libraries
	 * 
	 * @abstract
	 * @param {Song} song
	 * @returns {Promise<any>}
	 * 
	 * @memberOf LibraryService
	 */
	deleteSong(song: Song): Promise<any> {
		return this.songService.delete(song);
	}
}