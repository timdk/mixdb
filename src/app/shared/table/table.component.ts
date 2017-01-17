import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

/**
 * A shared component to make using the ng2-table library easier.
 * See: https://github.com/valor-software/ng2-table
 * @export
 * @class TableComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'mixdb-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    private _data: Array<any> = [];
    
    /**
     * Raw unfiltered data for the table.
     * @memberOf TableComponent
     */
    @Input()
    public set data(data: Array<any>) {
        this._data = data;
        this.refresh();
    }
    public get data(): Array<any> { return this._data; }
    
	
    /**
     * Column definitions.
     * 
     * @type {Array<any>}
     * @memberOf TableComponent
     */
    @Input() public columns:Array<any> = [];
    
	
    /**
     * Default table configuration.
     * 
     * @type {*}
     * @memberOf TableComponent
     */
    @Input() public config:any = {
        paging: false,	// Something wrong the the paging part of component template -- have commented it out for now
        sorting: {columns: this.columns},
        filtering: {filterString: ''},
        className: ['table-bordered', 'table-striped', 'table-hover' ]
    };

    @Output() public cellClicked = new EventEmitter<any>();  // For parent component binding
    
    public rows:Array<any> = [];    // Filtered and sorted data

    public page:number = 1;
    public itemsPerPage:number = 10;
    public maxSize:number = 5;
    public numPages:number = 1;
    public length:number = 0;

    constructor() {}

    ngOnInit(): void {
		this.config.sorting = { columns: this.columns };
		this.onChangeTable(this.config);
    }

    setData(data: Array<any>): void {
        this.data = data;
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

		let filteredData = this.changeFilter(this.data, this.config);
		let sortedData = this.changeSort(filteredData, this.config);
		this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
		this.length = sortedData.length;
  	}


	/**
	 * Cell clicked callback
	 * 
	 * @param {*} data
	 * @returns {*}
	 * @memberOf LibraryComponent
	 */
	public onCellClick(data: any): any {
        //console.log('TableComponent.onCellClick: ', data);
        this.cellClicked.emit(data);
	}

	
	/**
	 * Change the page on the table.
	 * 
	 * @param {*} page
	 * @param {Array<any>} [data=this.data]
	 * @returns {Array<any>}
	 * 
	 * @memberOf TableComponent
	 */
	public changePage(page:any, data:Array<any> = this.data):Array<any> {
		let start = (page.page - 1) * page.itemsPerPage;
		let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
		return data.slice(start, end);
	}

	
	/**
	 * Sort the input data based on the supplied configuration.
	 * 
	 * @param {*} data
	 * @param {*} config
	 * @returns {*}
	 * 
	 * @memberOf TableComponent
	 */
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

		// simple case-insensitive sorting
		return data.sort((previous:any, current:any) => {
			let previousValue = previous[columnName].toString().toLowerCase();
			let currentValue = current[columnName].toString().toLowerCase();
			if (previousValue > currentValue) {
				return sort === 'desc' ? -1 : 1;
			} else if (previousValue < currentValue) {
				return sort === 'asc' ? -1 : 1;
			}
			return 0;
		});
	}

	
	/**
	 * Apply table / column filters to data and return a filtered data set.
	 * @param {Array<any>} data
	 * @param {*} config
	 * @returns {Array<any>}
	 */
	public changeFilter(data:any, config:any):any {
		let filteredData:Array<any> = data;
		this.columns.forEach((column:any) => {
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
			this.columns.forEach((column:any) => {
				if (item[column.name].toString().toLowerCase().match(this.config.filtering.filterString.toLowerCase())) {
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
