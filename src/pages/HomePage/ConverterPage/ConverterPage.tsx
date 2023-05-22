import { FC, useEffect } from 'react';
import Header, { HeaderStyles } from '../../../components/Header/Header';
import Converter from '../../../components/Converter/Converter';
import classNames from 'classnames';
import s from './ConverterPage.module.css'
import { useTypedDispatch } from '../../../hooks/useTypedDispatch';
import { AppSettingsActionTypes } from '../../../types/appSettings';

const ConverterPage: FC = () => {
    const dispatch = useTypedDispatch();
    useEffect(() => {
        dispatch({type: AppSettingsActionTypes.setHeaderView, payload: HeaderStyles.default})
    }, [])

    return (
        <div className={classNames('container', s.content)}>
            <Converter/>
        </div>
    )
}

export default ConverterPage;