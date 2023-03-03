import {FC} from 'react';
import s from './Header.module.css'
import Nav from "../Nav/Nav";


export const Header: FC = () => {
    return (
        <header className={s.header}>
            <div className={s.desktopNavigation}>
                <div className={s.logo}>WEB</div>
                <Nav/>
            </div>
        </header>
    );
};
