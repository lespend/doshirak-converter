import ConverterField from "../ConverterField/ConverterField";
import { FC, useEffect } from 'react';
import s from './Converter.module.css'
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import { fetchCurrencyMap } from "../../store/action-creators/converter";
import { ConverterActionTypes } from "../../types/converter";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Loader from "../UI/Loader/Loader";
import CorrespondenceTable from "../CorrespondenceTable/CorrespondenceTable";
import { generateDefaultConversions } from "../../utils/functions";

const Converter: FC = () => {
    const {currencyMap, ...state} = useTypedSelector(state => state.converter);
    const dispatch = useTypedDispatch();

    useEffect(() => {
        dispatch(fetchCurrencyMap())
    }, [])

    useEffect(() => {
        if (Object.keys(currencyMap).length > 0) {
            dispatch({type: ConverterActionTypes.changeToValue, payload: currencyMap[state.fromCurrency] / currencyMap[state.toCurrency] * state.fromValue})
        }
    }, [state.fromCurrency, state.toCurrency])

    // useEffect(() => {
    //     if (Object.keys(currencyMap).length > 0) {
    //         dispatch({type: ConverterActionTypes.changeFromValue, payload: currencyMap[state.toCurrency] / currencyMap[state.fromCurrency] * state.toValue})
    //     }
    // }, [state.toCurrency])

    if (state.loading) {
        return <Loader />
    }

    if (state.error) {
        return <h2 className={s.error}>{state.error}</h2>
    }

    return (
        <>
        <div className={s.converterContainer}>
                <ConverterField 
                    className={s.converterField} 
                    value={state.fromValue} 
                    currencyList={Object.keys(currencyMap)}
                    onClick={(currency) => dispatch({type: ConverterActionTypes.changeFromCurrency, payload: currency })}
                    isActiveButton={current => current === state.fromCurrency}
                    onChange={(e) => {
                        let regexp = /^(\d+)?(\.)?(\d+)?(e)?([\+\-])?(\d+)?$/
                        if (!regexp.test(e.target.value)) {
                            return;
                        }
                        let value = parseFloat(e.target.value) || 0;
                        dispatch({type: ConverterActionTypes.changeFromValue, payload: e.target.value});
                        dispatch({type: ConverterActionTypes.changeToValue, payload: currencyMap[state.toCurrency] / currencyMap[state.fromCurrency] * value})
                    }}
                />

                <ConverterField 
                    className={s.converterField} 
                    value={state.toValue} 
                    currencyList={Object.keys(currencyMap)}
                    onClick={(currency) => dispatch({type: ConverterActionTypes.changeToCurrency, payload: currency })}
                    isActiveButton={current => current === state.toCurrency}
                    onChange={(e) => {
                        let regexp = /^(\d+)?(\.)?(\d+)?(e)?([\+\-])?(\d+)?$/
                        if (!regexp.test(e.target.value)) {
                            return;
                        }
                        let value = parseFloat(e.target.value) || 0;
                        dispatch({type: ConverterActionTypes.changeToValue, payload: e.target.value});
                        dispatch({type: ConverterActionTypes.changeFromValue, payload: currencyMap[state.fromCurrency] / currencyMap[state.toCurrency] * value})
                    }}
                />
            </div>
            <CorrespondenceTable correspondence={{from: state.fromCurrency, to: state.toCurrency, values: generateDefaultConversions(state.fromCurrency, state.toCurrency, currencyMap)}}/>
            </>
    )
}

export default Converter;