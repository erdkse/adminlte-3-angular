import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { AppService } from '../utils/services/app.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;
  constructor(
    private renderer: Renderer2,
    private notificationsService: NotificationsService,
    private appService: AppService
  ) {}

  ngOnInit() {
    this.renderer.addClass(document.body, 'login-page');
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  logIn() {
    if (this.loginForm.valid) {
      this.appService.login();
    } else {
      this.notificationsService.error('Error', 'Fill the form');
    }
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'login-page');
  }
}
