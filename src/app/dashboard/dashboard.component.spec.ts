/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { AuthService } from '../core/auth.service';
import { FakeAuthService } from '../../testing/fake-auth.service';

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [ DashboardComponent ],
        providers: [{ provide: AuthService, useClass: FakeAuthService }],
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a welcome message', () => {
        let welcomeElement = fixture.debugElement.query(By.css('.welcome-message'));
        expect(welcomeElement).toBeTruthy();
    });
});
