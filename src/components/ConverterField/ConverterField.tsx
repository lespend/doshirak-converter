import { FC } from 'react';
import s from './ConverterField.module.css'
import LightButton from '../UI/LightButton/LightButton';
import classNames from 'classnames';

interface ConverterFieldProps {
    className?: string;
    value: number;
    currencyList: string[];
    onClick: (currency: string) => void;
    isActiveButton: (current: string) => boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ConverterField: FC<ConverterFieldProps> = ({ className, value, currencyList, onClick, isActiveButton, onChange}) => {
    const converterFieldClasses = classNames(s.block, className)

    return (
        <div className={converterFieldClasses}>
            <div className={s.currency}>
                {currencyList.map(currency => 
                    <LightButton active={isActiveButton(currency)} className={s.currencyButton} onClick={() => onClick(currency)} >{currency}</LightButton>
                )}
            </div>
            <input className={s.field} type="text" value={value} onChange={onChange}/>
        </div>
    )
}

export default ConverterField;