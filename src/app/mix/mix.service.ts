import { Injectable } from '@angular/core';

import { Mix } from './mix';
import { Song } from '../song/song';

@Injectable()
export abstract class MixService {

    abstract getMix(id: string): Promise<Mix>;

    abstract getMixes(username?: string): Promise<Mix[]>;

    abstract saveMix(mix: Mix): Promise<any>;

    abstract addSong(mix: Mix, song: Song): Promise<any>;

    abstract removeSong(mix: Mix, song: Song): Promise<any>

    abstract deleteMix(mix: Mix): Promise<any>;
}
