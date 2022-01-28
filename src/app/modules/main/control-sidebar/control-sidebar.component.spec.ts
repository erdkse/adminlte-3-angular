import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlSidebarComponent } from './control-sidebar.component';

describe('ControlSidebarComponent', () => {
  let component: ControlSidebarComponent;
  let fixture: ComponentFixture<ControlSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
