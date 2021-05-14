import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Gatekeeper} from 'gatekeeper-client-sdk';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
    enableProdMode();
}

Gatekeeper.configure('9966bf1b-5da5-4b55-9301-86f9f0c77aaf', {
    googleClientID:
        '816324818723-e2hokn0pvjgkf8jcks6quido903ukeri.apps.googleusercontent.com',
    facebookAppID: '489915919118075'
});

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
