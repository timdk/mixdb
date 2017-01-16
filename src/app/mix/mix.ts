import { UUID } from 'angular2-uuid';
import { Song } from '../song/song';

/**
 * A DJ mix. Contains a tracklist of songs.
 * 
 * @export
 * @class Mix
 */
export class Mix {
	id: string;
	userId: string;	// Populated by MixService with current user's ID when saving.
	createdDate: Date;
	modifiedDate: Date;
	name: string;
	tracklist: Song[] = [];

	/**
	 * Creates an instance of Mix.
	 * 
	 * @param {string} name
	 * @constructor
	 */
	constructor(name?: string) {
		this.id = UUID.UUID();
		this.createdDate = new Date();
		this.modifiedDate = new Date();
		this.name = name || 'Untitled';
	}

}

export interface MixJSON {
	id: string,
	userId: string,
	createdDate: Date;
	modifiedDate: Date;
	name: string;
	tracklist: Array<any>;
}