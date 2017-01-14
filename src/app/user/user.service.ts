import { Injectable } from '@angular/core';
import { User } from './user';

/**
 * The definition of a user service. 
 * 
 * @export
 * @abstract
 * @class UserService
 */
@Injectable()
export abstract class UserService {

	/**
	 * Create a user.
	 * 
	 * @abstract
	 * @param {string} name
	 * @returns {Promise<User>}
	 * 
	 * @memberOf UserService
	 */
	abstract createUser(name: string): Promise<User>;
	
	/**
	 * Fetch a user.
	 * 
	 * @abstract
	 * @param {string} name
	 * @returns {Promise<User>}
	 * 
	 * @memberOf UserService
	 */
	abstract getUser(name: string): Promise<User>;

	
	/**
	 * Create or update a user.
	 * 
	 * @abstract
	 * @param {User} user
	 * @returns {Promise<any>}
	 * 
	 * @memberOf UserService
	 */
	abstract save(user: User): Promise<any>;

}