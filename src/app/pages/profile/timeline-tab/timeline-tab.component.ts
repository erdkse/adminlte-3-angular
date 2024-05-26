import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-timeline-tab',
    templateUrl: './timeline-tab.component.html',
    styleUrls: ['./timeline-tab.component.scss']
})
export class TimelineTabComponent {
    @Input() isActive: boolean = false;
}
