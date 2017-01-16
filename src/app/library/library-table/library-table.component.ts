import { Component, ViewChild, Output, EventEmitter } from '@angular/core';

import { TableComponent } from '../../shared/table/table.component';


/**
 * The list of songs in a user's library. Extends TableComponent 
 * to set the columns.
 * 
 * @export
 * @class LibraryTableComponent
 * @extends {TableComponent}
 */
@Component({
    selector: 'library-table',
    templateUrl: '../../shared/table/table.component.html',	// ** Superclass template
    styleUrls: ['../../shared/table/table.component.css']	// ** Superclass style
})
export class LibraryTableComponent extends TableComponent {

    public columns: Array<any> = [
		{ title: 'Artist', name: 'artist', sort: 'asc' }, 
		{ title: 'Title', name: 'title' },
		{ title: 'Tempo', name: 'tempo' }
	];
}
