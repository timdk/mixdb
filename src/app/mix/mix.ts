import { Song } from '../song/song';

/**
 * A DJ mix. Contains a tracklist of songs.
 * 
 * @export
 * @class Mix
 */
export class Mix {
	private modifiedDate: Date;
	tracklist: Song[];

	/**
	 * Creates an instance of Mix.
	 * 
	 * @param {string} name
	 * 
	 * @memberOf Mix
	 */
	constructor(name: string) {
		this.modifiedDate = new Date();
	}

}

export interface MixJSON {
	id: string,
	userId: string,
	trackList: string[];
}