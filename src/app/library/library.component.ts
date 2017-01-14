import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { LibraryService } from './library.service';
import { Library } from './library';
import { Song } from '../song/song';

import { LibraryTableComponent } from './library-table/library-table.component';

/**
 * This component is used to display and manage a user's library.
 * 
 * @export
 * @class LibraryComponent
 * @implements {OnInit}
 */
@Component({
	selector: 'mixdb-library',
	templateUrl: './library.component.html',
	styleUrls: [ './library.component.css' ],
})
export class LibraryComponent implements OnInit {
	private library: Library;

	@ViewChild(LibraryTableComponent)
	private table: LibraryTableComponent;

	public isCollapsed: boolean = true;

	/**
	 * Creates an instance of LibraryComponent.
	 * 
	 * @param {LibraryService} libraryService
	 * @param {Router} router
	 * 
	 * @memberOf LibraryComponent
	 */
	constructor(
		private libraryService: LibraryService,
		private router: Router
	) {}

	/** Fetch the user's library via the LibraryService */
	ngOnInit(): void {
		this.libraryService.getLibrary().then(library => { 
			this.library = library;
			this.table.setData(library.getSongs());
		});
	}

	/**
	 * Add a song to the library
	 * 
	 * @param {string} artist
	 * @param {string} title
	 * 
	 * @memberOf LibraryComponent
	 */
	addSong(artist: string, title: string): void {
		let song = new Song(artist, title);
		this.libraryService.addSong(this.library, song)
		.then(() => {
			this.refresh()
		});
	}

	/**
	 * Look up release info on discogs and add each song to the library.
	 * @param {string} catNo Catalog number for a release.
	 */
	addRelease(catNo: string): void {}	// stub

	/**
	 * Browse to the detail page for the selected song.
	 * @param {string} id
	 * @memberOf LibraryComponent
	 */
	gotoDetail(id: string): void {
		this.router.navigate(['/song', id]);
	}

	/** Refresh the table */
	refresh(): void {
		this.table.setData(this.library.getSongs());
	}

	/**
	 * Cell clicked callback
	 * 
	 * @param {*} data
	 * @returns {*}
	 * @memberOf LibraryComponent
	 */
	public onCellClick(data: any): any {
		let id = data.row.id;
		if (id) {
			this.gotoDetail(id);
		}
	}
}