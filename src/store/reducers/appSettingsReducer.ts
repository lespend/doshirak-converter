import { HeaderStyles } from '../../components/Header/Header';
import { AppSettingsAction, AppSettingsActionTypes, AppSettingsState } from '../../types/appSettings';

const initialState: AppSettingsState = {
    headerView: HeaderStyles.default,
}

export const appSettingsReducer = (state = initialState, action: AppSettingsAction) => {
    switch (action.type) {
        case AppSettingsActionTypes.setHeaderView:
            return {...state, headerView: action.payload}
        default:
            return state
    }
}