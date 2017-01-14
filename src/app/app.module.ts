import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/** Core and Routing modules */
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { LibraryModule } from './library/library.module';
import { MixModule } from './mix/mix.module';
import { UserModule } from './user/user.module';
import { SongModule } from './song/song.module';

/** Components */
import { AppComponent }  from './app.component';

@NgModule({
    imports:      [ 
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        UserModule,
        LibraryModule,
        MixModule,
        SongModule
    ],
    declarations: [ 
        AppComponent
    ],
    bootstrap:    [ 
        AppComponent 
    ]
})
export class AppModule { }
