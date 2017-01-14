import { Song } from '../song/song';

/**
 * A DJ mix. Contains a tracklist of songs.
 * 
 * @export
 * @class Mix
 */
export class Mix {
	createdDate: Date;
	modifiedDate: Date;
	name: string;
	tracklist: Song[];

	/**
	 * Creates an instance of Mix.
	 * 
	 * @param {string} name
	 * @constructor
	 */
	constructor(name?: string) {
		this.createdDate = new Date();
		this.modifiedDate = new Date();
		this.name = name || 'Untitled';
	}

}

export interface MixJSON {
	id: string,
	userId: string,
	trackList: string[];
}