/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NO_ERRORS_SCHEMA } from '@angular/core';

import { NavComponent } from './nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';
import { FakeAuthService } from '../../../testing/fake-auth.service';
import { RouterOutletStubComponent, RouterLinkStubDirective } from '../../../testing/router-stubs';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let linkDes: Array<DebugElement>;
  let links: Array<RouterLinkStubDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
        NgbModule.forRoot()
      ],
      declarations: [
        NavComponent,
        RouterLinkStubDirective
      ],
      providers: [{ provide: AuthService, useClass: FakeAuthService }],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // find DebugElements with an attached RouterLinkStubDirective
    linkDes = fixture.debugElement
      .queryAll(By.directive(RouterLinkStubDirective));

    // get the attached link directive instances using the DebugElement injectors
    links = linkDes
      .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(component.title);
  }));

  it('can get RouterLinks from template', () => {
    expect(links.length).toBe(4, 'should have 4 links');
    expect(links[0].linkParams).toBe('/', '1st (header) link should go to home page');
    expect(links[1].linkParams).toBe('/dashboard', '2nd link should go to Dashboard');
    expect(links[2].linkParams).toBe('/library', '3rd link should go to Library');
    expect(links[3].linkParams).toBe('/mixes', '4th link should go to Mixes');
  });

  it('can click Dashboard link in template', () => {
    const dashboardLinkDe = linkDes[1];
    const dashboardLink = links[1];

    expect(dashboardLink.navigatedTo).toBeNull('link should not have navigated yet');

    dashboardLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(dashboardLink.navigatedTo).toBe('/dashboard');
  });

  it('can click Library link in template', () => {
    const libraryLinkDe = linkDes[2];
    const libraryLink = links[2];

    expect(libraryLink.navigatedTo).toBeNull('link should not have navigated yet');

    libraryLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(libraryLink.navigatedTo).toBe('/library');
  });

  it('can click Mixes link in template', () => {
    const mixesLinkDe = linkDes[3];
    const mixesLink = links[3];

    expect(mixesLink.navigatedTo).toBeNull('link should not have navigated yet');

    mixesLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(mixesLink.navigatedTo).toBe('/mixes');
  });

  it('should display only the Home link when user is logged out', () => {
      let authService = fixture.debugElement.injector.get(AuthService);
      authService.logout();
      fixture.detectChanges();

      linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkStubDirective));
      expect(linkDes.length).toBe(1);
  });

});
