import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';

import { AuthService } from '../core/auth.service';


/**
 * The Dashboard is the landing page showing a welcome message
 * and gives an overview of recent activity and access to most
 * used features (eventually).
 * @export
 * @class DashboardComponent
 */
@Component({
	selector: 'mixdb-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent {
	constructor(private authService: AuthService) {}

	logout(): void {
		this.authService.logout();
	}
}