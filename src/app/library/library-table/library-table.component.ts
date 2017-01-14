import { Component, ViewChild, Output, EventEmitter } from '@angular/core';

import { TableComponent } from '../../shared/table/table.component';

@Component({
    selector: 'library-table',
    templateUrl: './library-table.component.html',
    styleUrls: ['./library-table.component.css']
})
export class LibraryTableComponent {

    @Output()
    public cellClicked = new EventEmitter<any>()

    @ViewChild(TableComponent)
	private table: TableComponent;
    
    private tableData: Array<any> = [];
	
    private tableColumnConfig: Array<any> = [
		{ title: 'Artist', name: 'artist', sort: 'asc' }, 
		{ title: 'Title', name: 'title' },
		{ title: 'Tempo', name: 'tempo' }
	];
	
	private tableConfig: any = {
		paging: false,
		sorting: {columns: this.tableColumnConfig},
		filtering: {filterString: ''},
		className: ['table-striped', 'table-bordered']
	};


    constructor() { }

    setData(data: Array<any>) {
        this.table.setData(data);
    }

    /**
	 * Cell clicked callback
	 * 
	 * @param {*} data
	 * @returns {*}
	 * @memberOf LibraryComponent
	 */
	public onCellClick(data: any): any {
        this.cellClicked.emit(data);
	}

}
