import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {BlankComponent} from './blank.component';

describe('BlankComponent', () => {
    let component: BlankComponent;
    let fixture: ComponentFixture<BlankComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [BlankComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlankComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
