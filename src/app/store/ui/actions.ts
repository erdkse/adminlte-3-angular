import {Action} from '@ngrx/store';

export const TOGGLE_SIDEBAR_MENU = 'TOGGLE_SIDEBAR_MENU';
export const SET_WINDOWS_SIZE = 'SET_WINDOWS_SIZE';

export class ToggleSidebarMenu implements Action {
    readonly type: string = TOGGLE_SIDEBAR_MENU;
}

export class SetWindowSize implements Action {
    readonly type: string = SET_WINDOWS_SIZE;

    constructor(public payload: any) {}
}
