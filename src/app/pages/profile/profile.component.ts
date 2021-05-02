import {Component, OnInit} from '@angular/core';
import {AppService} from '@services/app.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    constructor(public appService: AppService) {}

    ngOnInit() {}
}
