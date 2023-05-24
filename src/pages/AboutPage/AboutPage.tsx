import { FC, useEffect } from "react";
import s from './AboutPage.module.css'
import classNames from "classnames";
import {ReactComponent as Picture} from '../../assets/einshtein.svg'
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import { useSelectHeaderTheme } from "../../hooks/useSelectHeaderTheme";
import { HeaderStyles } from "../../components/Header/Header";

const AboutPage = () => {
    useSelectHeaderTheme(HeaderStyles.default);

    return (
        <div className={classNames('container', s.content)}>
            <Picture className={s.picture}/>
            <p className={s.quote}>
                Все в этом мире относительно
            </p>
            <p className={s.quoteAuthor}>Альберт Эйнштейн</p>
        </div>
    )
}

export default AboutPage;