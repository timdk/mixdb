import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { MixService } from './mix.service';
import { IndexedDBMixService } from './indexeddb-mix.service';

/** Components */
import { MixesComponent } from './mixes/mixes.component';
import { MixDetailComponent } from './mix-detail/mix-detail.component';
import { MixesTableComponent } from './mixes-table/mixes-table.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        MixesComponent,
        MixDetailComponent,
        MixesTableComponent
    ],
    providers: [
        { provide: MixService, useClass: IndexedDBMixService }
    ],
    exports: [
        MixesComponent,
        MixDetailComponent
    ]
})
export class MixModule { }