import {
    NAVBAR_DARK_VARIANTS,
    NAVBAR_LIGHT_VARIANTS,
    SIDEBAR_DARK_SKINS,
    SIDEBAR_LIGHT_SKINS
} from '@/utils/themes';
import * as Actions from './actions';
import {UiAction} from './actions';
import initialState, {UiState} from './state';

export function uiReducer(state: UiState = initialState, action: UiAction) {
    switch (action.type) {
        case Actions.TOGGLE_SIDEBAR_MENU:
            return {
                ...state,
                menuSidebarCollapsed: !state.menuSidebarCollapsed
            };
        case Actions.TOGGLE_CONTROL_SIDEBAR:
            return {
                ...state,
                controlSidebarCollapsed: !state.controlSidebarCollapsed
            };
        case Actions.TOGGLE_DARK_MODE:
            let variant: string;
            let skin: string;
            if (state.darkMode) {
                variant = NAVBAR_LIGHT_VARIANTS[0].value;
                skin = SIDEBAR_LIGHT_SKINS[0].value;
            } else {
                variant = NAVBAR_DARK_VARIANTS[0].value;
                skin = SIDEBAR_DARK_SKINS[0].value;
            }
            return {
                ...state,
                navbarVariant: variant,
                sidebarSkin: skin,
                darkMode: !state.darkMode
            };
        case Actions.SET_NAVBAR_VARIANT:
            let navbarVariant: string;
            if (state.darkMode) {
                navbarVariant = action.payload || NAVBAR_DARK_VARIANTS[0].value;
            } else {
                navbarVariant =
                    action.payload || NAVBAR_LIGHT_VARIANTS[0].value;
            }
            return {
                ...state,
                navbarVariant
            };
        case Actions.SET_SIDEBAR_SKIN:
            let sidebarSkin: string;
            if (state.darkMode) {
                sidebarSkin = action.payload || SIDEBAR_DARK_SKINS[0].value;
            } else {
                sidebarSkin = action.payload || SIDEBAR_LIGHT_SKINS[0].value;
            }
            return {
                ...state,
                sidebarSkin
            };
        default:
            return state;
    }
}
