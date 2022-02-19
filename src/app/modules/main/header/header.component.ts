import {AppState} from '@/store/state';
import {ToggleControlSidebar, ToggleSidebarMenu} from '@/store/ui/actions';
import {Component, HostBinding, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppService} from '@services/app.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @HostBinding('class') classes: string = 'main-header navbar navbar-expand';
    public searchForm: FormGroup;

    constructor(
        private appService: AppService,
        private store: Store<AppState>
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

    onToggleControlSidebar() {
        this.store.dispatch(new ToggleControlSidebar());
    }
}
