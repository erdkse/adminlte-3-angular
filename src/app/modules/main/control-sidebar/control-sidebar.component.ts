import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
    selector: 'app-control-sidebar',
    templateUrl: './control-sidebar.component.html',
    styleUrls: ['./control-sidebar.component.scss']
})
export class ControlSidebarComponent implements OnInit {
    @HostBinding('class') classes: string =
        'control-sidebar control-sidebar-dark';

    constructor() {}

    ngOnInit(): void {}
}
