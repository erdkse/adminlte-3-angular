/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MenuSidebarComponent } from './menu-sidebar.component';

describe('MenuSidbarComponent', () => {
  let component: MenuSidebarComponent;
  let fixture: ComponentFixture<MenuSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuSidebarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
