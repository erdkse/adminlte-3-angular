import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsDropdownMenuComponent } from './notifications-dropdown-menu.component';

describe('NotificationsDropdownMenuComponent', () => {
  let component: NotificationsDropdownMenuComponent;
  let fixture: ComponentFixture<NotificationsDropdownMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationsDropdownMenuComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsDropdownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
