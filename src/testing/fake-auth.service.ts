
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class FakeAuthService { 
    isLoggedIn =  true;
    
    user = { name: 'Test User' };
    
    getCurrentUser() { 
        return this.isLoggedIn ? this.user : null; 
    }

    logout() {
        this.isLoggedIn = false;
    }

    autoLogin() {
        return Observable.of(false);
    }
}