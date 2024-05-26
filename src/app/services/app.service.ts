import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {sleep} from '@/utils/helpers';

import {createUserWithEmailAndPassword} from '@firebase/auth';
import {
    User,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup
} from 'firebase/auth';
import {GoogleAuthProvider} from 'firebase/auth';
import {firebaseAuth} from '@/firebase';

const provider = new GoogleAuthProvider();

@Injectable({
    providedIn: 'root'
})
export class AppService {
    public user?: User | null = null;

    constructor(
        private router: Router,
        private toastr: ToastrService
    ) {
        onAuthStateChanged(
            firebaseAuth,
            (user) => {
                if (user) {
                    this.user = user;
                } else {
                    this.user = undefined;
                }
            },
            (e) => {
                this.user = undefined;
            }
        );
    }

    async registerWithEmail(email: string, password: string) {
        try {
            const result = await createUserWithEmailAndPassword(
                firebaseAuth,
                email,
                password
            );
            this.user = result.user;
            this.router.navigate(['/']);
            return result;
        } catch (error) {
            this.toastr.error(error.message);
        }
    }

    async loginWithEmail(email: string, password: string) {
        try {
            const result = await signInWithEmailAndPassword(
                firebaseAuth,
                email,
                password
            );
            this.user = result.user;
            this.router.navigate(['/']);

            return result;
        } catch (error) {
            this.toastr.error(error.message);
        }
    }

    async signInByGoogle() {
        try {
            const result = await signInWithPopup(firebaseAuth, provider);
            this.user = result.user;
            this.router.navigate(['/']);

            return result;
        } catch (error) {
            this.toastr.error(error.message);
        }
    }

    async getProfile() {
        try {
            await sleep(500);
            const user = firebaseAuth.currentUser;
            if (user) {
                this.user = user;
            } else {
                this.logout();
            }
        } catch (error) {
            this.logout();
            this.toastr.error(error.message);
        }
    }

    async logout() {
        await firebaseAuth.signOut();
        this.user = null;
        this.router.navigate(['/login']);
    }
}
