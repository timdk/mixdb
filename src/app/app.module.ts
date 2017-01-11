import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { NG_TABLE_DIRECTIVES } from 'ng2-table/ng2-table';

/** Routes for navigation */
import { AppRoutingModule } from './app-routing.module';

/** Authentication Services */
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

/** Service Class-Interfaces */
import { UserService } from './user.service';
import { LibraryService } from './library.service';
import { SongService } from './song.service';

/** Service Implementations */
import { IndexedDBService } from './indexeddb.service';
import { IndexedDBUserService } from './indexeddb-user.service';
import { IndexedDBLibraryService } from './indexeddb-library.service';
import { IndexedDBSongService } from './indexeddb-song.service';

/** Components */
import { AppComponent }  from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LibraryComponent } from './library/library.component';
import { SongDetailComponent } from './song-detail/song-detail.component';
import { MixesComponent } from './mixes/mixes.component';
import { MixDetailComponent } from './mix-detail/mix-detail.component';
import { DevToolsComponent } from './dev-tools/dev-tools.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	FormsModule,
    HttpModule,
  	AppRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [ 
  	AppComponent,
    LoginComponent,
  	DashboardComponent,
  	LibraryComponent,
  	SongDetailComponent,
  	MixesComponent,
  	MixDetailComponent,
    DevToolsComponent,
    NG_TABLE_DIRECTIVES,
    TableComponent
  ],
  providers: [
    AuthService, AuthGuard,
  	IndexedDBService,
    { provide: UserService, useClass: IndexedDBUserService },
    { provide: LibraryService, useClass: IndexedDBLibraryService },
    { provide: SongService, useClass: IndexedDBSongService },
  ],
  bootstrap:    [ 
    AppComponent 
  ]
})
export class AppModule { }
