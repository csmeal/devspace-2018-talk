import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SessionsComponent } from './sessions.component';

import { SessionService, MockSessionService } from '../../services';

describe('SessionsPage', () => {
  let component: SessionsComponent;
  let fixture: ComponentFixture<SessionsComponent>;
  let sessionsPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SessionsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: SessionService, useClass: MockSessionService }]
    }).compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(SessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    sessionsPage = fixture.nativeElement;
    const items = sessionsPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });
});
