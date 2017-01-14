import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

/** Service Class-Interfaces */

/** Service Implementations */
/** Components */
import { MixesComponent } from './mixes/mixes.component';
import { MixDetailComponent } from './mix-detail/mix-detail.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        MixesComponent,
        MixDetailComponent
    ],
    exports: [
        MixesComponent,
        MixDetailComponent
    ]
})
export class MixModule { }
