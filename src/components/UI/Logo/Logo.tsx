import { FC } from "react";
import { Link } from "react-router-dom";
import LogoPicture from '../../../assets/logo.png';
import s from './Logo.module.css'

const Logo: FC = () => {
    return ( 
        <Link className={s.link} to='/'>
            <img className={s.picture} src={LogoPicture} alt='Логотип' />
            <h1 className={s.title}>Doshirak<br/>Converter</h1>
        </Link>
    )
}

export default Logo;