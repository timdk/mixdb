import { Component, Input, OnInit } from '@angular/core';

import { KeysPipe } from '../../../shared/keys.pipe';

import { Song } from '../../song';
import { Key } from '../../key';


/**
 * The key selector on SongDetailComponent
 * 
 * @export
 * @class KeyComponent
 */
@Component({
  selector: 'song-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent {
    @Input() song: Song;
    keys: any[];

    /**
     * Can't iterate over Enum types with NgFor so load the Key enum 
     * into this.keys[] with values: { value: 1, text: 'C♯ / D♭' }
     */
    ngOnInit() {
        const values = Object.keys(Key)
            .map(k => Key[k])
            .filter(v => typeof v === "number") as number[];
        this.keys = values.map(k => { return { value: k, text: Song.getKeyText(k) }; });
    }

    
    /**
     * Set or unset the key on the song.
     * @param {number} key
     */
    setKey(key: Key) {
        if (this.song.key === key) {
            this.song.key = undefined;
        } else {
            this.song.key = key;
        }
    }

}
