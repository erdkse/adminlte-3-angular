import {Action} from '@ngrx/store';
import * as Actions from './actions';

const initialState = {
    isSidebarMenuCollapsed: false
};

export function uiReducer(
    state = initialState,
    action: Actions.ToggleSidebarMenu
) {
    switch (action.type) {
        case Actions.TOGGLE_SIDEBAR_MENU:
            return {
                ...state,
                isSidebarMenuCollapsed: !state.isSidebarMenuCollapsed
            };
            break;

        default:
            return state;
    }
}
