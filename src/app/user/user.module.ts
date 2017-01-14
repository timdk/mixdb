import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './user.service';
import { IndexedDBUserService } from './indexeddb-user.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [
        { provide: UserService, useClass: IndexedDBUserService }
    ]
})
export class UserModule { }
