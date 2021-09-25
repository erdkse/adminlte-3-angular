import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
    @Input() type: string = 'button';
    @Input() block: boolean = false;
    @Input() color: string = 'primary';
    @Input() disabled: boolean = false;
    @Input() loading: boolean = false;
    @Input() icon: string = null;

    public icons = {
        facebook: 'fab fa-facebook',
        google: 'fab fa-google',
        googlePlus: 'fab fa-google-plus'
    };

    constructor() {}
}
