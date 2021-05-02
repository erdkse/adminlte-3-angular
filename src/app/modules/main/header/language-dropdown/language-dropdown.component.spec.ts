import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LanguageDropdownComponent} from './language-dropdown.component';

describe('LanguageDropdownComponent', () => {
    let component: LanguageDropdownComponent;
    let fixture: ComponentFixture<LanguageDropdownComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LanguageDropdownComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LanguageDropdownComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
