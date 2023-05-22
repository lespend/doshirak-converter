import { FC } from 'react';
import EggPicture from '../../assets/egg.png';
import NarutomakiPicture from '../../assets/narutomaki.png';
import SousPicture from '../../assets/sous.png';
import WokPicture from '../../assets/wok.png';
import s from './HomePage.module.css';
import classNames from 'classnames';
import { useRef, useEffect, useState } from 'react';
import Header, { HeaderStyles } from '../../components/Header/Header';
import { useTypedDispatch } from '../../hooks/useTypedDispatch';
import { AppSettingsActionTypes } from '../../types/appSettings';

const HomePage: FC = () => {
    const parallaxContainer = useRef<HTMLDivElement>(null);
    const [parallaxState, setParallaxState] = useState({x: 0, y: 0});
    const baseMovement = {x: 1 / 20, y: 1 / 5};
    const dispatch = useTypedDispatch();

    useEffect(() => {
        document.addEventListener('mousemove', (e) => {
            const x = e.pageX;
            const y = e.pageY;
            setParallaxState({x, y})
        })
        dispatch({type: AppSettingsActionTypes.setHeaderView, payload: HeaderStyles.main})
    }, [])

    return (
        <div className={s.screen} ref={parallaxContainer}>
            <img style={{ transform: `translate(${parallaxState.x * baseMovement.x}px, ${parallaxState.y * baseMovement.y}px)` }} className={classNames(s.picture, s.eggPicture)} src={EggPicture} alt="яйцо" />
            <img style={{ transform: `translate(${parallaxState.x * baseMovement.x}px, ${-parallaxState.y * baseMovement.y/2}px)` }} className={classNames(s.picture, s.narutomakiPicture)} src={NarutomakiPicture} alt="нарутомаки" />
            <img style={{ transform: `translate(${parallaxState.x * baseMovement.x*2}px, ${parallaxState.y * baseMovement.y*2}px) rotate(${parallaxState.x / (4*Math.PI)}deg)` }} className={classNames(s.picture, s.sousPicture)} src={SousPicture} alt="соус" />
            <img style={{ transform: `translate(${parallaxState.x * baseMovement.x/2}px, ${-parallaxState.y * baseMovement.y/10}px)` }} className={classNames(s.picture, s.wokPicture)} src={WokPicture} alt="лапша вок" />
            <div className={classNames('container', s.content)}>
                <h1 className={s.mainTitle}>Doshirak<br/>converter</h1>
            </div>
        </div>
    );
}

export default HomePage;