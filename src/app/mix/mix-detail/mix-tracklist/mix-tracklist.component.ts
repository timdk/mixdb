import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { LibraryService } from '../../../library/library.service';
import { Mix } from '../../mix';
import { Song } from '../../../song/song';

/**
 * Lists the tracks (Songs) in a mix and provides abilities reorganising 
 * and appending tracks.
 * 
 * @export
 * @class MixTracklistComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'mix-tracklist',
    templateUrl: './mix-tracklist.component.html',
    styleUrls: ['./mix-tracklist.component.css']
})
export class MixTracklistComponent implements OnInit {
    @Input() mix: Mix;
    @Output() trackAdded = new EventEmitter<any>(); // Pass events back to the parent component so that 
                                                    // it can track unsaved changes etc.

    private librarySongs: Song[];       // The user's complete library (until that's unfeasible...).
    private filteredSongs: Song[];      // A filtered list of songs to add based on user input.
    
    /**
     * Creates an instance of MixTracklistComponent.
     * 
     * @param {LibraryService} libraryService
     */
    constructor(private libraryService: LibraryService) { }

    /** Fetch the songs from the library for lookup when building the tracklist. */
    ngOnInit() {
        this.libraryService.getSongs()
        .then(songs => this.librarySongs = songs);
    }

    /**
     * Filter list of songs from the library based on the text 
     * entered into the search box and provided to this function 
     * by binding to the keyup event. A basic case-insensitive match
     * is performed.
     * @param {string} filterString
     */
    filterLibrary(filterString: string): void {
        if (filterString.length > 0) {
            let tempArray:Array<Song> = [];
            let searchProperties = ['artist', 'title', 'tempo', 'key'];
            this.librarySongs.forEach((item:any) => {
                let flag = false;
                searchProperties.forEach((property: any) => {
                    if (item[property].toString().toLowerCase().match(filterString.toLowerCase())) {
                        flag = true;
                    }
                });
                if (flag) {
                    tempArray.push(item);
                }
            });
            this.filteredSongs = tempArray;

            console.log('Filtered library on ', filterString, ' and found ', tempArray);
        } else {
            this.filteredSongs = [];
        }

    }

    /** Emit an event for the parent MixDetailComponent to bind to. */
    addTrackClicked(song: Song): void {
        this.trackAdded.emit(song);
    }

}
