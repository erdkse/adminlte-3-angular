import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Gatekeeper} from 'gatekeeper-client-sdk';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
    enableProdMode();
}

Gatekeeper.configure('10fb0126-384b-40b6-8945-cb7c249b4937', {
    googleClientID:
        '816324818723-e2hokn0pvjgkf8jcks6quido903ukeri.apps.googleusercontent.com'
});

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
