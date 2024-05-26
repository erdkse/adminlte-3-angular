import {Component, Input, OnInit} from '@angular/core';
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
    progressBarContent: string = '';

    ngOnInit() {
        this.iconVariant = this.icon?.variant || this.variant;
        // this.iconContent = this.getIconContent();
        // this.progressBarContent = this.getProgressBarContent();
    }

    getProgressBarContent() {
        if (this.progressBar) {
            const progressBarVariant = this.progressBar.variant || this.variant;
            return `
        <div class="progress">
          <div class="progress-bar ${progressBarVariant ? `bg-${progressBarVariant}` : ''}"
               style="width: ${this.progressBar?.level || 0}%"></div>
        </div>
        ${this.progressBar?.description ? `<span class="progress-description">${this.progressBar.description}</span>` : ''}
      `;
        }
        return '';
    }

    public getLoadingPropType(): 'light' | 'dark' {
        return typeof this.loading === 'string' ? this.loading : 'light';
    }
}
