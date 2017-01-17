import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

import { TableComponent } from '../../shared/table/table.component';
import { Mix } from '../mix';

/**
 * The list of mixes on the MixDetailComponent. Extends TableComponent in order to set 
 * the columns and override setData() to perform data transformations.
 * @export
 * @class MixesTableComponent
 * @extends {TableComponent}
 */
@Component({
    selector: 'mixes-table',
    templateUrl: '../../shared/table/table.component.html',
    styleUrls: ['../../shared/table/table.component.css'],
})
export class MixesTableComponent extends TableComponent {

    public columns: Array<any> = [
        { title: 'Name', name: 'title' },
        //{ title: 'Created', name: 'createdDate' },
        { title: 'Date', name: 'date', sort: 'desc' }
    ];

    /**
     * Set content of the table, performing the required transformations for dates.
     * @param {Array<any>} data
     * @memberOf MixesTableComponent
     */
    setData(data: Array<Mix>): void {
        let transformedData = new Array<any>();
        var datePipe = new DatePipe('en-NZ'); // Because NZ is the best ;)
        data.forEach((mix: Mix) => {
            let tableRow = Object.assign({}, mix, {
                //createdDate: datePipe.transform(mix.createdDate, 'yyyy-MM-dd'),
                date: datePipe.transform(mix.modifiedDate, 'yyyy-MM-dd')
            });
            transformedData.push(tableRow);
        });
        this.data = transformedData;
    }
}
