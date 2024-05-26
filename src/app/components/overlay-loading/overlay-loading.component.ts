import {Component, HostBinding, Input} from '@angular/core';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-overlay-loading',
    templateUrl: './overlay-loading.component.html',
    styleUrls: ['./overlay-loading.component.scss']
})
export class OverlayLoadingComponent {
    faSpinner = faSpinner;
    @Input() type: 'dark' | 'light' = 'light';
    @HostBinding('class') class = 'overlay';
}
