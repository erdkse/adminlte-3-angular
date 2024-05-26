import {Component, HostBinding} from '@angular/core';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrl: './loading.component.scss'
})
export class LoadingComponent {
    @HostBinding('class') class =
        'preloader flex-column justify-content-center align-items-center';
}
