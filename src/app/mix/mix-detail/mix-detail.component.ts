import { Component, Input, OnInit } from '@angular/core';

import { Mix } from '../mix';

/**
 * Component for creating and managing mixes.
 * 
 * @export
 * @class MixDetailComponent
 */
@Component({
	selector: '<mix-detail></mix-detail>',
	template: `<h2 *ngIf="mix">{{mix.title}}</h2>`,
	styles: []
})
export class MixDetailComponent {
	@Input()
	mix: Mix;
} 