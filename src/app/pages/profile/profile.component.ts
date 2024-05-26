import {Component} from '@angular/core';
import {AppService} from '@services/app.service';
import {BehaviorSubject, Observable} from 'rxjs';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
    public activeTabSubject = new BehaviorSubject<string>('ACTIVITY');
    activeTab$ = this.activeTabSubject.asObservable();

    public user;

    constructor(private appService: AppService) {}

    ngOnInit(): void {
        this.user = this.appService.user;
    }

    setActiveTab(tab: string) {
        this.activeTabSubject.next(tab);
    }

    toggle(tab: string) {
        this.setActiveTab(tab);
    }
}
