import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {IconDefinition} from '@fortawesome/angular-fontawesome';

export type VARIANT_TYPES =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';

@Component({
    selector: 'app-info-box',
    templateUrl: './info-box.component.html',
    styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnInit {
    @Input() loading?: 'dark' | boolean;
    @Input() icon?: {
        content: IconDefinition;
        variant?: VARIANT_TYPES;
    };
    @Input() variant?: VARIANT_TYPES;
    @Input() title: string = '';
    @Input() text: string = '';
    @Input() progressBar?: {
        description?: string;
        level: number;
        variant?: VARIANT_TYPES;
    };

    iconVariant: string;
    progressBarVariant: string;

    @HostBinding('class') class;

    ngOnInit() {
        this.class = `info-box bg-${this.variant}`;
        this.iconVariant = this.icon?.variant || this.variant;
        this.progressBarVariant = this.progressBar?.variant || this.variant;
    }

    public getLoadingPropType(): 'light' | 'dark' {
        return typeof this.loading === 'string' ? this.loading : 'light';
    }
}
