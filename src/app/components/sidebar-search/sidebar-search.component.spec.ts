import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSearchComponent } from './sidebar-search.component';

describe('SidebarSearchComponent', () => {
  let component: SidebarSearchComponent;
  let fixture: ComponentFixture<SidebarSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
