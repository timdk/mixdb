import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MixService } from '../mix.service';
import { MixesTableComponent } from '../mixes-table/mixes-table.component';
import { Mix } from '../mix';

/** 
 * List the current user's mixes and provide actions for creating new mixes.
 */
@Component({
	selector: '<mixdb-mix></mixdb-mix>',
	templateUrl: './mixes.component.html',
	styleUrls: [ './mixes.component.html' ]
})
export class MixesComponent {
	@ViewChild(MixesTableComponent) table: MixesTableComponent;
	
	mixes: Mix[] = [
		new Mix(),
		new Mix()
	];

	constructor(
		private mixService: MixService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.getMixes();
	}

	getMixes(): void {
		this.table.setData(this.mixes);
	}

	onCellClick(data: any) {
		console.log('mixes.component: cell clicked', data);
	}

	createNew() {
		this.router.navigate(['/mix']);
	}
}