import { ConverterAction, ConverterActionTypes } from "../../types/converter";
import CurrencyService from "../../service/CurrencyService";
import { Dispatch } from "redux";

export const fetchCurrencyMap = () => {
    return async (dispatch: Dispatch<ConverterAction>) => {
        try {
            dispatch({type: ConverterActionTypes.fetchCurrencyMap})
            const response = await CurrencyService.getCurrencyMap();
            dispatch({type: ConverterActionTypes.fetchCurrencyMapSuccess, payload: response})
        } catch (e) {
            dispatch({type: ConverterActionTypes.fetchCurrencyMapError, payload: 'Не удалось получить курс валют'})
        }
    }
}