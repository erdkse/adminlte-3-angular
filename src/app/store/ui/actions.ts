import {Action} from '@ngrx/store';

export const TOGGLE_SIDEBAR_MENU: string = 'TOGGLE_SIDEBAR_MENU';
export const TOGGLE_CONTROL_SIDEBAR: string = 'TOGGLE_CONTROL_SIDEBAR';
export const TOGGLE_DARK_MODE: string = 'TOGGLE_DARK_MODE';
export const SET_NAVBAR_VARIANT: string = 'SET_NAVBAR_VARIANT';
export const SET_SIDEBAR_SKIN: string = 'SET_SIDEBAR_SKIN';
export const SET_WINDOWS_SIZE: string = 'SET_WINDOWS_SIZE';

export class ToggleSidebarMenu implements Action {
    readonly type: string = TOGGLE_SIDEBAR_MENU;
    constructor(public payload?: string) {}
}
export class ToggleControlSidebar implements Action {
    readonly type: string = TOGGLE_CONTROL_SIDEBAR;
    constructor(public payload?: string) {}
}

export class ToggleDarkMode implements Action {
    readonly type: string = TOGGLE_DARK_MODE;
    constructor(public payload?: string) {}
}

export class SetNavbarVariant implements Action {
    readonly type: string = SET_NAVBAR_VARIANT;
    constructor(public payload: string) {}
}

export class SetSidebarSkin implements Action {
    readonly type: string = SET_SIDEBAR_SKIN;
    constructor(public payload: string) {}
}
export class SetWindowSize implements Action {
    readonly type: string = SET_WINDOWS_SIZE;
    constructor(public payload: any) {}
}

export type UiAction =
    | SetNavbarVariant
    | SetSidebarSkin
    | ToggleSidebarMenu
    | ToggleControlSidebar
    | ToggleDarkMode
    | SetWindowSize;
