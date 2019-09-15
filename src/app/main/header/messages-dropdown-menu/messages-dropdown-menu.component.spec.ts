import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesDropdownMenuComponent } from './messages-dropdown-menu.component';

describe('MessagesDropdownMenuComponent', () => {
  let component: MessagesDropdownMenuComponent;
  let fixture: ComponentFixture<MessagesDropdownMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesDropdownMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesDropdownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
