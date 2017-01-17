import { UUID } from 'angular2-uuid';

import { Key } from './key';

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
	key: Key;

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
		artist: string = 'Unknown Artist', 
		title: string = 'Untitled', 
		tempo: number = 0, 
		key?: Key,
		id?: string
	) {
		this.artist = artist;
		this.title = title;
		this.tempo = tempo;
		this.key = 1;
		this.id = (id) ? id : UUID.UUID();
	}

	getKeyText(): string {
		return Song.getKeyText(this.key);
	}

	static getKeyText(key: Key): string {
		let text: string;
		switch (key) {
			case Key.C:
				text = 'C';
				break;
			case Key.DFlat:
				text = 'C♯ / D♭';
				break;
			case Key.D:
				text = 'D';
				break;
			case Key.EFlat:
				text = 'D♯ / E♭';
				break;
			case Key.E:
				text = 'E';
				break;
			case Key.F:
				text = 'F';
				break;
			case Key.FSharp:
				text = 'F♯ / G♭';
				break;
			// case Key.GFlat:
			// 	text = 'G♭';
			// 	break;
			case Key.G:
				text = 'G';
				break;
			case Key.AFlat:
				text = 'G♯ / A♭';
				break;
			case Key.A:
				text = 'A';
				break;
			case Key.BFlat:
				text = 'A♯ / B♭';
				break;
			case Key.B:
				text = 'B';
				break;
		}
		return text;
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
	key: number;
}