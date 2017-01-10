import { Library } from './library';
import { UUID } from 'angular2-uuid';

/**
 * A user.
 * 
 * @export
 * @class User
 */
export class User {
	id: string;
	name: string;
	private libraryId: string; // temp

	/**
	 * Creates an instance of User.
	 * 
	 * @param {string} name
	 * 
	 * @memberOf User
	 */
	constructor(name: string) {
		this.id = UUID.UUID();
		this.name = name;
	}

	/**
	 * Link a library to a user. Users may have at most one library.
	 * 
	 * @param {Library} library
	 * 
	 * @memberOf User
	 */
	setLibrary(library: Library): void {
		this.libraryId = library.id;
	}

	/**
	 * Get the user's libraryId.
	 * 
	 * @returns {string}
	 * 
	 * @memberOf User
	 */
	getLibraryId(): string {
		return this.libraryId;
	}


	/** de/serialisation functions  */
	
	toJSON(): UserJSON {
		return Object.assign({} as UserJSON, this, {});
	}

	static fromJSON(json: UserJSON|string): User {
		if (typeof json === 'string') {
			return JSON.parse(json, User.reviver);
		} else {
			let user = Object.create(User.prototype);
			return Object.assign(user, json, {});
		}
	}

	static reviver(key: string, value: any): any {
		return key === '' ? User.fromJSON(value) : value;
	}

}

export interface UserJSON {
	id: string;
	name: string;
	libraryId: string;
}