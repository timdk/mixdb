import { Component, Input } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
    selector: 'mixdb-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent {
    @Input() public title = 'Default';
    public navCollapsed: boolean = true;
    
    constructor(private authService: AuthService) { }
}
