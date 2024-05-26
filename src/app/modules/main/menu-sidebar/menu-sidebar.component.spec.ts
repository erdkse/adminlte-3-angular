import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {MenuSidebarComponent} from './menu-sidebar.component';

describe('MenuSidbarComponent', () => {
    let component: MenuSidebarComponent;
    let fixture: ComponentFixture<MenuSidebarComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [MenuSidebarComponent]
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
