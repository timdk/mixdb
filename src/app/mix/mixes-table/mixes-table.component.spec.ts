/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MixesTableComponent } from './mixes-table.component';

describe('MixesTableComponent', () => {
    let component: MixesTableComponent;
    let fixture: ComponentFixture<MixesTableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [ MixesTableComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MixesTableComponent);
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

    it('should emit events when mixes are clicked', () => {
        expect(true).toBeFalsy('test not implemented');
    });
});
