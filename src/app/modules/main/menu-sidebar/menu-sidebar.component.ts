import {Component, OnInit} from '@angular/core';
import {AppService} from '@services/app.service';

@Component({
    selector: 'app-menu-sidebar',
    templateUrl: './menu-sidebar.component.html',
    styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit {
    public user;
    public dashboardMenu: any = {
        name: 'Dashboard',
        path: ['/']
    };
    public blankMenu: any = {
        name: 'Blank',
        path: ['/blank']
    };
    public mainMenu: any = {
        name: 'Main Menu',
        children: [
            {
                name: 'Sub Menu',
                path: ['/sub-menu-1']
            },

            {
                name: 'Blank',
                path: ['/sub-menu-2']
            }
        ]
    };

    constructor(public appService: AppService) {}

    ngOnInit() {
        this.user = this.appService.user;
    }
}
