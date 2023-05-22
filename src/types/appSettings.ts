import { HeaderStyles } from "../components/Header/Header";

export interface AppSettingsState {
    headerView: HeaderStyles;
}

interface SetHeaderViewAction {
    type: AppSettingsActionTypes.setHeaderView;
    payload: HeaderStyles;
}

export enum AppSettingsActionTypes {
    setHeaderView = 'SET_HEADER_VIEW'
}

export type AppSettingsAction = SetHeaderViewAction;
