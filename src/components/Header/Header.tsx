import React, { FC } from "react";
import s from './Header.module.css';
import Navigation from "../Navigation/Navigation";
import classNames from "classnames";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Logo from "../UI/Logo/Logo";

export enum HeaderStyles {
    main = 'main',
    default = 'dafault'
}

const Header: FC = () => {
    const view = useTypedSelector(state => state.settings.headerView)
    const HeaderClasses = classNames(
        s.header, {
            [s.headerMain]: view === 'main', 
        }
    )
    const HeaderContentClasses = classNames(
        'container',
        s.content, {
            [s.contentMain]: view === HeaderStyles.main,
        }
    )

    return (
        <header className={HeaderClasses}>
            <div className={HeaderContentClasses}>
                {view === HeaderStyles.default ? <Logo /> : ''}
                <Navigation currentView={view} />
            </div>
        </header>
    )
}

export default Header;