import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { SongService } from './song.service';
import { IndexedDBSongService } from './indexeddb-song.service';

/** Components */
import { SongDetailComponent } from './song-detail/song-detail.component';


@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
         SongDetailComponent
    ],
    providers: [
        { provide: SongService, useClass: IndexedDBSongService }
    ],
    exports: [
        SongDetailComponent
    ]
})
export class SongModule { }
