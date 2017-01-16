import { Injectable } from '@angular/core';

import { Mix } from './mix';
import { Song } from '../song/song';

/**
 * The service class-interface for mixes.
 * @export
 * @abstract
 * @class MixService
 */
@Injectable()
export abstract class MixService {
    /**
     * Get a mix by its ID.
     * 
     * @param {string} id
     * @returns {Promise<Mix>}
     */
    abstract getMix(id: string): Promise<Mix>;

    /**
     * Get the mixes for a user.
     * 
     * @param {string} [username]   Defaults to current user's name if not supplied.
     * @returns {Promise<Mix[]>}
     */
    abstract getMixes(username?: string): Promise<Mix[]>;

    /**
     * Save a mix.
     * 
     * @param {Mix} mix
     * @returns {Promise<any>}
     */
    abstract saveMix(mix: Mix): Promise<any>;
    
    /**
     * Add a song to a mix.
     * 
     * @param {Mix} mix
     * @param {Song} song
     * @returns {Promise<any>}
     */
    abstract addSong(mix: Mix, song: Song): Promise<any>;

    /**
     * Remove a song from a mix.
     * 
     * @param {Mix} mix
     * @param {Song} song
     * @returns {Promise<any>}
     */
    abstract removeSong(mix: Mix, song: Song): Promise<any>
    
    /**
     * Delete a mix completely.
     * 
     * @param {Mix} mix
     * @returns {Promise<any>}
     */
    abstract deleteMix(mix: Mix): Promise<any>;
}
