import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Gatekeeper} from 'gatekeeper-client-sdk';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
    enableProdMode();
}

Gatekeeper.initialize('9966bf1b-5da5-4b55-9301-86f9f0c77aaf');

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
