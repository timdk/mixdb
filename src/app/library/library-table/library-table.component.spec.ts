/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LibraryTableComponent } from './library-table.component';

import { NG_TABLE_DIRECTIVES } from 'ng2-table/ng2-table';
import { TableComponent } from '../../shared/table/table.component'

describe('LibraryTableComponent', () => {
    let component: LibraryTableComponent;
    let fixture: ComponentFixture<LibraryTableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [ 
            LibraryTableComponent,
            NG_TABLE_DIRECTIVES,
            TableComponent
        ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LibraryTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should be sortable', () => {
        expect(true).toBeFalsy('test not implemented');
    });

    it('should be filterable', () => {
        expect(true).toBeFalsy('test not implemented');
    });

    it('should emit events when rows are clicked', () => {
        expect(true).toBeFalsy('test not implemented');
    });

    it('should have an artist column', () => {
        expect(true).toBeFalsy('test not implemented');
    });

    it('should have a title column', () => {
        expect(true).toBeFalsy('test not implemented');
    });

    it('should have a tempo column', () => {
        expect(true).toBeFalsy('test not implemented');
    });
});
