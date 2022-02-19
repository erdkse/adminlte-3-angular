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
            return {
                ...state,
                darkMode: !state.darkMode
            };
        case Actions.SET_NAVBAR_VARIANT:
            return {
                ...state,
                navbarVariant: action.payload
            };
        case Actions.SET_SIDEBAR_SKIN:
            return {
                ...state,
                sidebarSkin: action.payload
            };
        default:
            return state;
    }
}
