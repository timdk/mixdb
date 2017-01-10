import { UUID } from 'angular2-uuid';

/**
 * A song.
 * 
 * @export
 * @class Song
 */
export class Song {
	id: string;
	artist: string;
	title: string;
	tempo: number;
	key: string;

	/**
	 * Creates an instance of Song.
	 * 
	 * @param {string} artist
	 * @param {string} title
	 * @param {number} [tempo=0]
	 * @param {string} [key='']
	 * @param {string} [id]
	 * 
	 * @memberOf Song
	 */
	constructor(
		artist: string, 
		title: string, 
		tempo: number = 0, 
		key: string = '',
		id?: string
	) {
		this.artist = artist;
		this.title = title;
		this.tempo = tempo;
		this.key = key;
		this.id = (id) ? id : UUID.UUID();
	}

	/** de/serialisation functions  */

	toJSON(): SongJSON {
		return Object.assign({} as SongJSON, this, {});
	}

	static fromJSON(json: SongJSON|string): Song {
		if (typeof json === 'string') {
			return JSON.parse(json, Song.reviver);
		} else {
			let song = Object.create(Song.prototype);
			return Object.assign(song, json, {});
		}
	}

	static reviver(key: string, value: any): any {
		return key === '' ? Song.fromJSON(value) : value;
	}

}

export interface SongJSON {
	id: string;
	artist: string;
	title: string;
	tempo: number;
	key: string;
}