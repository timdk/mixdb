import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { LibraryService } from './library.service';
import { IndexedDBLibraryService } from './indexeddb-library.service';

import { LibraryComponent } from './library.component';
import { LibraryTableComponent } from './library-table/library-table.component';
import { AddToLibraryComponent } from './add-to-library/add-to-library.component';


@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        LibraryComponent,
        LibraryTableComponent,
        AddToLibraryComponent
    ],
    providers: [
        { provide: LibraryService, useClass: IndexedDBLibraryService }
    ],
    exports: [
        LibraryComponent
    ]
})
export class LibraryModule { }
