export interface CurrencyMap {
    [index: string]: number;
}

export interface ConverterState {
    fromCurrency: string;
    fromValue: number;
    toCurrency: string;
    toValue: number;
    loading: boolean;
    error: string | null;
    currencyMap: CurrencyMap;
}

interface ChangeFromCurrencyAction {
    type: ConverterActionTypes.changeFromCurrency;
    payload: string;
}

interface ChangeFromValueAction {
    type: ConverterActionTypes.changeFromValue;
    payload: number;
}

interface ChangeToCurrencyAction {
    type: ConverterActionTypes.changeToCurrency;
    payload: string;
}

interface ChangeToValueAction {
    type: ConverterActionTypes.changeToValue;
    payload: number;
}

interface FetchCurrencyMapAction {
    type: ConverterActionTypes.fetchCurrencyMap;
}

interface FetchCurrencyMapSuccessAction {
    type: ConverterActionTypes.fetchCurrencyMapSuccess;
    payload: CurrencyMap;
}

interface FetchCurrencyMapErrorAction {
    type: ConverterActionTypes.fetchCurrencyMapError;
    payload: string;
}

export type ConverterAction = 
    ChangeFromCurrencyAction | 
    ChangeFromValueAction | 
    ChangeToCurrencyAction | 
    ChangeToValueAction |
    FetchCurrencyMapAction |
    FetchCurrencyMapErrorAction |
    FetchCurrencyMapSuccessAction;

export enum ConverterActionTypes {
    changeFromCurrency = 'CHANGE_FROM_CURRENCY',
    changeFromValue = 'CHANGE_FROM_VALUE',
    changeToCurrency = 'CHANGE_TO_CURRENCY',
    changeToValue = 'CHANGE_TO_VALUE',
    fetchCurrencyMap = 'FETCH_CURRENCY_MAP',
    fetchCurrencyMapSuccess = 'FETCH_CURRENCY_MAP_SUCCESS',
    fetchCurrencyMapError = 'FETCH_CURRENCY_MAP_ERROR'
}