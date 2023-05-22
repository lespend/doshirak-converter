import { FC } from 'react';
import s from './LightButton.module.css';
import classNames from 'classnames';

interface LightButtonProps {
    children: React.ReactNode;
    fontSize?: number;
    active?: boolean;
    className?: string;
    onClick?: () => void;
}

const LightButton: FC<LightButtonProps> = ({ children, fontSize, active = false, className, onClick }) => {
    const buttonClasses = classNames(
        className, {
        [s.button]: true,
        [s.buttonActive]: active,
    })

    return (
        <button className={buttonClasses} style={{ fontSize }} onClick={onClick}>
            {children}
        </button>
    )
}

export default LightButton;