import React, {FC} from 'react';
import s from './Nav.module.css'
import Hamburger from 'hamburger-react'


const Nav:FC = () => {
    return (
        <>
            <div className={s.nav}>
                <a>Home</a>
                <a>Skills</a>
                <a>Projects</a>
                <a>Contacts</a>
            </div>
            <div className={s.mobileNavigation}>
                <Hamburger size={40} color="gold"/>
            </div>
        </>
    );
};

export default Nav;