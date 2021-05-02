import {
    Component,
    OnInit,
    AfterViewInit,
    ViewChild,
    Output,
    EventEmitter
} from '@angular/core';
import {AppService} from '@services/app.service';

@Component({
    selector: 'app-menu-sidebar',
    templateUrl: './menu-sidebar.component.html',
    styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit, AfterViewInit {
    public user;
    @ViewChild('mainSidebar', {static: false}) mainSidebar;
    @Output() mainSidebarHeight: EventEmitter<any> = new EventEmitter<any>();

    constructor(public appService: AppService) {}

    ngOnInit() {
        this.user = this.appService.user;
    }

    ngAfterViewInit() {
        this.mainSidebarHeight.emit(
            this.mainSidebar.nativeElement.offsetHeight
        );
    }
}
