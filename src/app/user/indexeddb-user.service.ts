import { Injectable } from '@angular/core';

import { IndexedDBService, IndexedDBStorage } from '../core/indexeddb.service';
import { UserService } from './user.service';
import { User } from './user';

/**
 * UserService implemented using an IndexedDB data store.
 * 
 * @export
 * @class IndexedDBUserService
 * @implements {UserService}
 */
@Injectable()
export class IndexedDBUserService implements UserService {
	private db: IndexedDBStorage;
	private user: User;

	constructor(private indexedDbService: IndexedDBService) {
		this.db = indexedDbService.getDatabase();
	}
	
	
	/**
	 * Create a new User.
	 * 
	 * @param {string} name
	 * @returns {Promise<User>}
	 * 
	 * @memberOf IndexedDBUserService
	 */
	createUser(name: string): Promise<User> {
		let user = new User(name);
		return Promise.resolve(
			this.db.users.add(user.toJSON())
			.catch((error: any) => { 
				// TODO: check error message for specific error relating to already existing object
				console.error('UserService: Unable to create User "' + name + '". Error returned:');
				console.error(error);
				throw error;
			})
			.then(() => { this.user = user; return this.user; })
		);
	}

	
	/**
	 * Retrieve a User from the data store.
	 * 
	 * @param {string} name
	 * @returns {Promise<User>}
	 * 
	 * @memberOf IndexedDBUserService
	 */
	getUser(name: string): Promise<User> {
		if (this.user && this.user.name === name) {
			return Promise.resolve(this.user)
		} else {
			return Promise.resolve(
				this.db.users.get(name)
				.then(user => { 
					if (!user) {
						console.log('IndexedDBUserService.getUser: Unable to find user "' + name + '"');
						throw new Error('User "' + name + '" not found.');
					} else {
						this.user = User.fromJSON(user);
					}
					return this.user;
				})
			);
		}
	}

	
	/**
	 * Create or update a User.
	 * 
	 * @param {User} user
	 * @returns {Promise<any>}
	 * 
	 * @memberOf IndexedDBUserService
	 */
	save(user: User): Promise<any> {
		return Promise.resolve(this.db.users.put(user.toJSON()));
	}

}