/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MixDetailComponent } from './mix-detail.component';

describe('MixDetailComponent', () => {
    let component: MixDetailComponent;
    let fixture: ComponentFixture<MixDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [ MixDetailComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MixDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display the title in a heading', () => {
        expect(true).toBeFalsy('test not implemented');
    });

    it('should be able to set the title', () => {
        expect(true).toBeFalsy('test not implemented');
    });

    it('should have tracklist component', () => {
        expect(true).toBeFalsy('test not implemented');
    });

    it('should display created and edited dates', () => {
        expect(true).toBeFalsy('test not implemented');
    });
});
