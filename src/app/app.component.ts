import { Component } from '@angular/core';
import { AuthService } from './auth.service';

/**
 * The main entry point for the application.
 * 
 * @export
 * @class AppComponent
 */
@Component({
	selector: 'mixdb-app',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = "MixDB";

	public navCollapsed: boolean = true;

	constructor(private authService: AuthService) {}
}