import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppButtonComponent } from './app-button.component';

describe('AppButtonComponent', () => {
  let component: AppButtonComponent;
  let fixture: ComponentFixture<AppButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
