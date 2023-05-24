import { FC } from 'react';
import { Link } from 'react-router-dom';
import s from './NavigationLink.module.css'
import classNames from 'classnames';

interface NavigationLinkProps {
    children: React.ReactNode;
    to: string;
    className?: string;
    view?: NavigationLinkViews;
    onClick?: (e?: React.MouseEvent<HTMLAnchorElement>) => void;
}

export enum NavigationLinkViews {
    default = 'default',
    light = 'light'
}

const NavigationLink: FC<NavigationLinkProps> = ({ children, to, className, view, onClick }) => {
    const NavigationLinkClasses = classNames(
        s.link,
        className, {
            [s.linkLight]: view === NavigationLinkViews.light    
        }
    )
    return (
        <Link onClick={onClick} to={to} className={NavigationLinkClasses}>{ children }</Link>
    )
}

export default NavigationLink;