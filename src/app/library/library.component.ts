import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {NG_TABLE_DIRECTIVES} from 'ng2-table/ng2-table';

import { LibraryService } from '../library.service';
import { Library } from '../library';
import { Song } from '../song';

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

	private tableData: Array<Song> = [];
	private tableRows: Array<any> = [];
	private tableColumnConfig: Array<any> = [
		//{ title: 'ID', name: 'id', sorting: false },
		{ title: 'Artist', name: 'artist', sort: 'asc' }, 
		{ title: 'Title', name: 'title' },
		//{ title: 'Release', name: 'release' },
		{ title: 'Tempo', name: 'tempo' }
	];
	// Unfortunately this has to be named "config";
	private config: any = {
		paging: false,
		sorting: {columns: this.tableColumnConfig},
		filtering: {filterString: ''},
		className: ['table-striped', 'table-bordered']
	};

	public isCollapsed:boolean = true;

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
			this.tableData = library.getSongs();
			this.onChangeTable(this.config);
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
			this.tableData.push(song);
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
		this.onChangeTable(this.config);
	}

	/** Callback for changing table filters, sorting or page */
	public onChangeTable(config:any, page:any = { page: 1, itemsPerPage: 100 }): any {
		if (config.filtering) {
			Object.assign(this.config.filtering, config.filtering);
		}

		if (config.sorting) {
			Object.assign(this.config.sorting, config.sorting);
		}

		let filteredData = this.changeFilter(this.tableData, this.config);
		let sortedData = this.changeSort(filteredData, this.config);
		this.tableRows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
		//this.length = sortedData.length;
  	}


	/**
	 * Cell clicked callback
	 * 
	 * @param {*} data
	 * @returns {*}
	 * @memberOf LibraryComponent
	 */
	public onCellClick(data: any): any {
		console.log(data);
		let id = data.row.id;
		if (id) {
			this.gotoDetail(id);
		}
	}

	public changePage(page:any, data:Array<any> = this.tableData):Array<any> {
		let start = (page.page - 1) * page.itemsPerPage;
		let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
		return data.slice(start, end);
	}

	public changeSort(data:any, config:any):any {
		if (!config.sorting) {
			return data;
		}

		let columns = this.config.sorting.columns || [];
		let columnName:string = void 0;
		let sort:string = void 0;

		for (let i = 0; i < columns.length; i++) {
			if (columns[i].sort !== '' && columns[i].sort !== false) {
				columnName = columns[i].name;
				sort = columns[i].sort;
			}
		}

		if (!columnName) {
			return data;
		}

		// simple sorting
		return data.sort((previous:any, current:any) => {
			if (previous[columnName] > current[columnName]) {
				return sort === 'desc' ? -1 : 1;
			} else if (previous[columnName] < current[columnName]) {
				return sort === 'asc' ? -1 : 1;
			}
			return 0;
		});
	}

	public changeFilter(data:any, config:any):any {
		let filteredData:Array<any> = data;
		this.tableColumnConfig.forEach((column:any) => {
			if (column.filtering) {
				filteredData = filteredData.filter((item:any) => {
					return item[column.name].match(column.filtering.filterString);
				});
			}
		});

		if (!config.filtering) {
			return filteredData;
		}

		if (config.filtering.columnName) {
			return filteredData.filter((item: any) => {
				item[config.filtering.columnName].match(this.config.filtering.filterString)
			});
		}

		let tempArray:Array<any> = [];
		filteredData.forEach((item:any) => {
			let flag = false;
			this.tableColumnConfig.forEach((column:any) => {
				if (item[column.name].toString().match(this.config.filtering.filterString)) {
					flag = true;
				}
			});
			if (flag) {
				tempArray.push(item);
			}
		});
		filteredData = tempArray;

		return filteredData;
	}
}