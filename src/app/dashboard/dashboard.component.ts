import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { Song } from '../song'

@Component({
	selector: 'my-dashboard',
	templateUrl: './dashboard.component.html',
	//styleUrls: [ 'dashboard.component.css' ]
	styles: []
})
export class DashboardComponent {
	constructor(private authService: AuthService, private router: Router) {}

	logout(): void {
		this.authService.logout();
		this.router.navigate(['/login']);
	}
}