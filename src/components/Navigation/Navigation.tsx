import { FC, useState } from 'react';
import NavigationLink, { NavigationLinkViews } from '../UI/NavigationLink/NavigationLink';
import s from './Navigation.module.css'
import classNames from 'classnames';
import {ReactComponent as MenuIcon} from '../../assets/menu-hamburger-svgrepo-com.svg'
import { HeaderStyles } from '../Header/Header';

interface NavigationProps {
    currentView: HeaderStyles;
}

const Navigation: FC<NavigationProps> = ({currentView}) => {
    const [isMenuActive, setActiveMenu] = useState(false)
    const navigationClasses = classNames({
        [s.navigation]: true,
        [s.navigationDefault]: HeaderStyles.default === currentView,
        [s.navigationMain]: HeaderStyles.main === currentView,
        [s.navigationActive]: isMenuActive,
    })

    const navigationLinkView = currentView === HeaderStyles.default ? NavigationLinkViews.light : NavigationLinkViews.default;

    const navigationLinkClickHandler = () => {
        setActiveMenu(false);
    }

    return (
        <>
        <div className={navigationClasses}>
            <NavigationLink onClick={navigationLinkClickHandler} view={navigationLinkView} className={s.link} to='/'>Главная</NavigationLink>
            <NavigationLink onClick={navigationLinkClickHandler} view={navigationLinkView} className={s.link} to='/converter'>Конвертер</NavigationLink>
            <NavigationLink onClick={navigationLinkClickHandler} view={navigationLinkView} className={s.link} to='/about'>О проекте</NavigationLink>
        </div>
        <button className={s.menuButton} onClick={() => setActiveMenu(!isMenuActive)}>
            <MenuIcon className={classNames(s.menuButtonIcon, {[s.menuButtonIconMain]: currentView === HeaderStyles.main})}/>
        </button>
        </>
    )
}

export default Navigation;