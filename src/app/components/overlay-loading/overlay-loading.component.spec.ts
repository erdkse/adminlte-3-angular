import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayLoadingComponent } from './overlay-loading.component';

describe('OverlayLoadingComponent', () => {
  let component: OverlayLoadingComponent;
  let fixture: ComponentFixture<OverlayLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OverlayLoadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OverlayLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
