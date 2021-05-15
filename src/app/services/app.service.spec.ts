/* eslint-disable @typescript-eslint/no-unused-vars */

import {TestBed, inject, waitForAsync} from '@angular/core/testing';
import {AppService} from './app.service';

describe('Service: App', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AppService]
        });
    });

    it('should ...', inject([AppService], (service: AppService) => {
        expect(service).toBeTruthy();
    }));
});
