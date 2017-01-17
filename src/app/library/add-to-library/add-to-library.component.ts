import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Song } from '../../song/song';

@Component({
    selector: 'add-to-library',
    templateUrl: './add-to-library.component.html',
    styleUrls: ['./add-to-library.component.css']
})
export class AddToLibraryComponent {
    @Input() isCollapsed: boolean = true;
    @Output() songAdded = new EventEmitter<Song>();

    private addSong(artist: HTMLInputElement, title: HTMLInputElement, tempo: HTMLInputElement) {
        this.songAdded.emit(new Song(artist.value, title.value, +tempo.value));
        artist.value = title.value = tempo.value = null;
    }
}
