import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from '@/app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from '@modules/main/main.component';
import {LoginComponent} from '@modules/login/login.component';
import {HeaderComponent} from '@modules/main/header/header.component';
import {FooterComponent} from '@modules/main/footer/footer.component';
import {MenuSidebarComponent} from '@modules/main/menu-sidebar/menu-sidebar.component';
import {BlankComponent} from '@pages/blank/blank.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ProfileComponent} from '@pages/profile/profile.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RegisterComponent} from '@modules/register/register.component';
import {DashboardComponent} from '@pages/dashboard/dashboard.component';
import {ToastrModule} from 'ngx-toastr';
import {MessagesDropdownMenuComponent} from '@modules/main/header/messages-dropdown-menu/messages-dropdown-menu.component';
import {NotificationsDropdownMenuComponent} from '@modules/main/header/notifications-dropdown-menu/notifications-dropdown-menu.component';
import {AppButtonComponent} from './components/app-button/app-button.component';

import {registerLocaleData} from '@angular/common';
import localeEn from '@angular/common/locales/en';
import {UserDropdownMenuComponent} from '@modules/main/header/user-dropdown-menu/user-dropdown-menu.component';
import {ForgotPasswordComponent} from '@modules/forgot-password/forgot-password.component';
import {RecoverPasswordComponent} from '@modules/recover-password/recover-password.component';
import {LanguageDropdownComponent} from '@modules/main/header/language-dropdown/language-dropdown.component';
import {PrivacyPolicyComponent} from './modules/privacy-policy/privacy-policy.component';

registerLocaleData(localeEn, 'en-EN');

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent,
        MenuSidebarComponent,
        BlankComponent,
        ProfileComponent,
        RegisterComponent,
        DashboardComponent,
        MessagesDropdownMenuComponent,
        NotificationsDropdownMenuComponent,
        AppButtonComponent,
        UserDropdownMenuComponent,
        ForgotPasswordComponent,
        RecoverPasswordComponent,
        LanguageDropdownComponent,
        PrivacyPolicyComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
