import {Action} from '@ngrx/store';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const LOAD_USER = 'LOAD_USER';

export class LoginUser implements Action {
    readonly type: string = LOAD_USER;
    payload: string;
}
