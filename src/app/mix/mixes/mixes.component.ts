import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MixService } from '../mix.service';
import { MixesTableComponent } from '../mixes-table/mixes-table.component';
import { Mix } from '../mix';

/** 
 * List the current user's mixes and provide actions for creating new mixes.
 * @export
 * @class MixesComponent
 */
@Component({
	selector: '<mixdb-mix></mixdb-mix>',
	templateUrl: './mixes.component.html',
	styleUrls: [ './mixes.component.html' ]
})
export class MixesComponent {
	@ViewChild(MixesTableComponent) table: MixesTableComponent;

	mixes: Mix[] = [];

	/**
	 * Creates an instance of MixesComponent.
	 * 
	 * @param {MixService} mixService
	 * @param {Router} router
	 * 
	 * @memberOf MixesComponent
	 */
	constructor(
		private mixService: MixService,
		private router: Router
	) {}

	/** Load this user's mixes */
	ngOnInit(): void {
		this.getMixes();
	}

	/** Fetch the mixes from the MixService and set them on this component */
	getMixes(): void {
		this.mixService.getMixes()
		.then(mixes => {
			this.mixes = mixes;
			this.table.setData(this.mixes);
		});
	}

	
	/**
	 * Respond to click events from the MixTracklistComponent.
	 * @param {*} data
	 * @memberOf MixesComponent
	 */
	onCellClick(data: any) {
		this.gotoDetail(data.row.id);
	}

	
	/**
	 * Navigate to the MixDetailComponent to create a new mix.
	 * @memberOf MixesComponent
	 */
	createNew() {
		this.router.navigate(['/mix']);
	}


	/**
	 * Navigate to the MixDetailComponent to edit an existing mix.
	 * @param {string} id
	 * @memberOf MixesComponent
	 */
	gotoDetail(id: string): void {
		this.router.navigate(['/mix', id]);
	}
}