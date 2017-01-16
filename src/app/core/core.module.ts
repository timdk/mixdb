import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { RouterModule } from '@angular/router';

/** For CommonModule, FormModule (for login) and bootstrap directives (for nav/dev-tools) */
import { SharedModule } from '../shared/shared.module';

/** Authentication Services */
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

/** Global Services */
import { IndexedDBService } from './indexeddb.service';

/** Components */
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DevToolsComponent } from './dev-tools/dev-tools.component';


@NgModule({
    imports: [
        SharedModule,
        RouterModule
    ],
    declarations: [
        NavComponent,
        LoginComponent,
        DashboardComponent,
        DevToolsComponent
    ],
    providers: [
         AuthService, AuthGuard,
         IndexedDBService
    ],
    exports: [
        NavComponent,
        LoginComponent,
        DashboardComponent,
        DevToolsComponent
    ]
})
export class CoreModule {
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
            'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
 }
