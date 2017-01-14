import { Component, OnInit } from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from '../core/auth.service';

/**
 * Component to hand logging in and out of the application.
 * 
 * @export
 * @class LoginComponent
 */
@Component({
    selector: 'mixdb-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
    private name: string;   // Username
    private rememberUser: boolean;
    message: string;        // Status message

    /**
     * Creates an instance of LoginComponent.
     * 
     * @param {AuthService} authService
     * @param {Router} router
     * 
     * @memberOf LoginComponent
     */
    constructor(public authService: AuthService, public router: Router) {
        this.setMessage();
    }

    /** Auto-Login if there is a user saved. */
    ngOnInit(): void {
        this.authService.autoLogin().subscribe(() => this.redirectAfterLogin());
    }

    /**
     * Populate message with the login/out status.
     * @memberOf LoginComponent
     */
    setMessage(): void {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }

    /**
     * Check login status and if successful proceed to the dashboard or redirect URL.
     */
    redirectAfterLogin(): void {
        this.setMessage();
        if (this.authService.isLoggedIn) {
            // Get the redirect URL from our auth service
            // If no redirect has been set, use the default
            let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';
            // Redirect the user
            this.router.navigate([redirect]);
        }
    }

    /**
     * Log in to the application.
     * @memberOf LoginComponent
     */
    login(): void {
        this.message = 'Trying to log in ...';
        this.authService.login(this.name, this.rememberUser).subscribe(() => this.redirectAfterLogin());
    }

    /**
     * Log out of the application.
     * @memberOf LoginComponent
     */
    logout(): void {
        this.authService.logout();
        this.setMessage();
    }
}