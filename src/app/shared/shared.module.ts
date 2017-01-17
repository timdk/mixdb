import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/** 3rd party stuff */
import { NG_TABLE_DIRECTIVES } from 'ng2-table/ng2-table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TableComponent } from './table/table.component';
import { KeysPipe } from './keys.pipe';
@NgModule({
    imports: [
        CommonModule,
        NgbModule
    ],
    declarations: [
        KeysPipe,
        TableComponent,
        NG_TABLE_DIRECTIVES
    ],
    exports: [
        NgbModule,
        TableComponent, NG_TABLE_DIRECTIVES,
        CommonModule, FormsModule,
        KeysPipe
    ]
})
export class SharedModule { }
