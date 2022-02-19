import {ToggleSidebarMenu} from '@/store/ui/actions';
import {Component, HostBinding, OnInit, Renderer2} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    @HostBinding('class') class = 'wrapper';
    public ui: Observable<{isSidebarMenuCollapsed: boolean}>;

    constructor(
        private renderer: Renderer2,
        private store: Store<{ui: {isSidebarMenuCollapsed: boolean}}>
    ) {}

    ngOnInit() {
        this.ui = this.store.select('ui');
        this.renderer.removeClass(
            document.querySelector('app-root'),
            'login-page'
        );
        this.renderer.removeClass(
            document.querySelector('app-root'),
            'register-page'
        );

        this.ui.subscribe(({isSidebarMenuCollapsed}) => {
            if (isSidebarMenuCollapsed) {
                this.renderer.removeClass(
                    document.querySelector('app-root'),
                    'sidebar-open'
                );
                this.renderer.addClass(
                    document.querySelector('app-root'),
                    'sidebar-collapse'
                );
            } else {
                this.renderer.removeClass(
                    document.querySelector('app-root'),
                    'sidebar-collapse'
                );
                this.renderer.addClass(
                    document.querySelector('app-root'),
                    'sidebar-open'
                );
            }
        });
    }

    onToggleMenuSidebar() {
        this.store.dispatch(new ToggleSidebarMenu());
    }
}
