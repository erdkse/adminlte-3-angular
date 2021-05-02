import {TestBed, inject, waitForAsync} from '@angular/core/testing';

import {NonAuthGuard} from './non-auth.guard';

describe('NonAuthGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [NonAuthGuard]
        });
    });

    it('should ...', inject([NonAuthGuard], (guard: NonAuthGuard) => {
        expect(guard).toBeTruthy();
    }));
});
