import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

import gk from 'gatekeeper-client-sdk';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    public user = {
        firstName: 'Alexander',
        lastName: 'Pierce',
        image: 'assets/img/user2-160x160.jpg'
    };

    constructor(private router: Router, private toastr: ToastrService) {}

    async login({email, password}) {
        try {
            const token = await gk.loginByAuth(email, password);
            localStorage.setItem('token', token);
            this.router.navigate(['/']);
        } catch (error) {
            this.toastr.error(error.message);
        }
    }

    async register({email, password}) {
        try {
            const token = await gk.registerByAuth(email, password);
            localStorage.setItem('token', token);
            this.router.navigate(['/']);
        } catch (error) {
            this.toastr.error(error.message);
        }
    }

    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }
}
