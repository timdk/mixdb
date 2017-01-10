import { Component, OnInit } from '@angular/core';

import { Mix } from '../mix';

/** List recently modified mixes for the dashboard */
@Component({
	selector: '<mixdb-mix></mixdb-mix>',
	template: `<h1>Mixes<h1>`,
	styles: []
})
export class MixesComponent {
	mixes: Mix[];

	ngOnInit(): void {
		this.getMixes();
	}

	getMixes(): void {

	}
}