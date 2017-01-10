import { UUID } from 'angular2-uuid';
import { Song } from './song';

/**
 * A music library.
 * 
 * @export
 * @class Library
 */
export class Library {
	id: string = 'dev';	// temp ID until multiple libraries are implemented
	private created: Date;
	private songs: SongMap = {};

	/**
	 * Creates an instance of Library.
	 * 
	 * @param {LibraryService} libraryService
	 * 
	 * @memberOf Library
	 */
	constructor() {
		this.created = new Date();
		this.id = UUID.UUID();
	}

	/**
	 * Add a song to the library.
	 * 
	 * @param {Song} song
	 * 
	 * @memberOf Library
	 */
	add(song: Song): void {
		this.songs[song.id] = song;
	}

	/**
	 * Remove a song from the library.
	 * 
	 * @param {Song} song
	 * 
	 * @memberOf Library
	 */
	delete(song: Song): void {
		delete this.songs[song.id];
	}

	/**
	 * Get a song by its ID.
	 * 
	 * @param {string} id
	 * @returns {(Song|null)}
	 * 
	 * @memberOf Library
	 */
	getSong(id: string): Song|null {
		return this.songs[id] || null;
	}
	
	/**
	 * Get all of the songs from this library.
	 * @returns {Song[]}
	 */
	getSongs(): Song[] {
		let songArray: Song[] = [];
		for (let key in this.songs) {
			if (this.songs.hasOwnProperty(key)) {
				songArray.push(this.songs[key]);
			}
		}
		return songArray;
	}

	/**
	 * Set the library's songs to the provided array.
	 * @param {Song[]} songs
	 */
	setSongs(songs: Song[]): void {
		for (let i = 0; i < songs.length; i++) {
			this.songs[songs[i].id] = songs[i];
		}
	}

	/** de/serialisation functions */

	toJSON(): LibraryJSON {
		return Object.assign({} as LibraryJSON, this, {
			// convert fields that need converting
			created: this.created.toString(),
			songs: Object.keys(this.songs) // Song IDs in an array. Restored separately by LibraryService.
		});
	}

	static fromJSON(json: LibraryJSON|string): Library {
		if ( typeof json === 'string') {
			return JSON.parse(json, Library.reviver);
		} else {
			let library = Object.create(Library.prototype);
			return Object.assign(library, json, {
				// Convert fields that require it
				created: new Date(json.created),
				songs: {} as SongMap // Songs are populated by LibraryService for now 
			});
		}
	}

	static reviver(key: string, value: any): any {
		return key === "" ? Library.fromJSON(value) : value;
	}

}

export interface LibraryJSON {
	id: string;
	userId: string;
	created: string;
	songs: string[];
}

export interface LibrarySong {
	libraryId: string,
	songId: string
}

interface SongMap {
	[id: string]: Song;
}