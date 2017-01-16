/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MixesComponent } from './mixes.component';

describe('MixesComponent', () => {
    let component: MixesComponent;
    let fixture: ComponentFixture<MixesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [ MixesComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MixesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display a list of mixes', () => {
        expect(true).toBeFalsy('test not implemented');
    });

    it('should navigate to the MixDetailComponent when the add new button is clicked', () => {
        expect(true).toBeFalsy('test not implemented');
    });

    it('should navigate to the MixDetailComponent when an existing mix is clicked', () => {
        expect(true).toBeFalsy('test not implemented');
    });
});
