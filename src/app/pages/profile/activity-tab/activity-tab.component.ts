import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-activity-tab',
    templateUrl: './activity-tab.component.html',
    styleUrls: ['./activity-tab.component.scss']
})
export class ActivityTabComponent {
    @Input() isActive: boolean = false;
}
