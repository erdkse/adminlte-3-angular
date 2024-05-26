import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallBoxComponent } from './small-box.component';

describe('SmallBoxComponent', () => {
  let component: SmallBoxComponent;
  let fixture: ComponentFixture<SmallBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmallBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmallBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
