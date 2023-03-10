import {FC} from 'react';
import s from './Navigation.module.scss'

export const Navigation: FC = () => {
    return (
        <nav className={s.nav}>
            <a href="">1</a>
            <a href="">2</a>
            <a href="">3</a>
            <a href="">4</a>
        </nav>
    )
}