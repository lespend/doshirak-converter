import { HeaderStyles } from "../components/Header/Header";
import { AppSettingsActionTypes } from "../types/appSettings";
import { useTypedDispatch } from "./useTypedDispatch";
import { useEffect } from 'react';

export const useSelectHeaderTheme = (theme: HeaderStyles) => {
    const dispatch = useTypedDispatch();
    
    useEffect(() => {
        dispatch({type: AppSettingsActionTypes.setHeaderView, payload: theme})
    }, [])
}