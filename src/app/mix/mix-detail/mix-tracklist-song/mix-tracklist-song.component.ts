import { Component, Input } from '@angular/core';

import { Song } from '../../../song/song';

@Component({
    selector: 'li[mix-tracklist-song]',
    templateUrl: './mix-tracklist-song.component.html',
    styleUrls: ['./mix-tracklist-song.component.css']
})
export class MixTracklistSongComponent {
    @Input() song: Song;
    @Input() index: number;
}
