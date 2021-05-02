import {Component, OnInit, OnDestroy, Renderer2} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {AppService} from '@services/app.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    public loginForm: FormGroup;
    public isAuthLoading = false;
    constructor(
        private renderer: Renderer2,
        private toastr: ToastrService,
        private appService: AppService
    ) {}

    ngOnInit() {
        this.renderer.addClass(
            document.querySelector('app-root'),
            'login-page'
        );
        this.loginForm = new FormGroup({
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        });
    }

    async login() {
        if (this.loginForm.valid) {
            this.isAuthLoading = true;
            await this.appService.login(this.loginForm.value);
            this.isAuthLoading = false;
        } else {
            this.toastr.error('Hello world!', 'Toastr fun!');
        }
    }

    ngOnDestroy() {
        this.renderer.removeClass(
            document.querySelector('app-root'),
            'login-page'
        );
    }
}
