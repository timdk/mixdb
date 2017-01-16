import { Component, Input } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
    selector: 'mixdb-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent {
    @Input() public title = 'Default';
    public navCollapsed: boolean = true;    // Tracks the state of the nav bar on small devices
    
    /**
     * Creates an instance of NavComponent.
     * AuthService is injected to show the logout link and hide areas when 
     * not logged in.
     * @param {AuthService} authService
     */
    constructor(private authService: AuthService) { }
}
