import { ConverterState, ConverterAction, ConverterActionTypes } from "../../types/converter"

const initialState: ConverterState = {
    fromCurrency: 'btc',
    fromValue: 0,
    toCurrency: 'doshirak'  ,
    toValue: 0,
    loading: false,
    error: null,
    currencyMap: {}
}

export const converterReducer = (state = initialState, action: ConverterAction) => {
    switch (action.type) {
        case ConverterActionTypes.changeFromCurrency:
            return { ...state, fromCurrency: action.payload }
        case ConverterActionTypes.changeFromValue:
            return { ...state, fromValue: action.payload }
        case ConverterActionTypes.changeToCurrency:
            return { ...state, toCurrency: action.payload }
        case ConverterActionTypes.changeToValue:
            return { ...state, toValue: action.payload }
        case ConverterActionTypes.fetchCurrencyMap:
            return {...state, loading: true, currencyMap: {}, error: null}
        case ConverterActionTypes.fetchCurrencyMapSuccess:
            return {...state, loading: false, currencyMap: action.payload, error: null}
        case ConverterActionTypes.fetchCurrencyMapError:
            return {...state, loading: false, currencyMap: {}, error: action.payload}
        default:
            return state
    }
}   