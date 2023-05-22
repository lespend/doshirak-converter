import { combineReducers } from 'redux';
import { converterReducer } from './converterReducer';
import { appSettingsReducer } from './appSettingsReducer';

export const rootReducer = combineReducers({ 
    converter: converterReducer,
    settings: appSettingsReducer,
})

export type RootState = ReturnType<typeof rootReducer>