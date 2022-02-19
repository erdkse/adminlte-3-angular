import {ToggleSidebarMenu} from '@/store/ui/actions';
import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppService} from '@services/app.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public searchForm: FormGroup;

    constructor(
        private appService: AppService,
        private store: Store<{ui: {isSidebarMenuCollapsed: boolean}}>
    ) {}

    ngOnInit() {
        this.searchForm = new FormGroup({
            search: new FormControl(null)
        });
    }

    logout() {
        this.appService.logout();
    }

    onToggleMenuSidebar() {
        this.store.dispatch(new ToggleSidebarMenu());
    }

    onToggleControlSidebar() {}
}
