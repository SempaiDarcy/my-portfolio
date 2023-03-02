import React, {FC, useState} from 'react';
import s from './Nav.module.css'
import Hamburger from 'hamburger-react'

type NavbarProps = {
    handleOpen:()=>void
}
const Nav:FC<NavbarProps> = ({handleOpen}) => {
    return (
        <>
            <div className={s.nav}>
                <a>Home</a>
                <a>Skills</a>
                <a>Projects</a>
                <a>Contacts</a>
            </div>
            <div className={s.mobileNavigation} onClick={handleOpen}><Hamburger size={40} color="gold"/></div>
        </>
    );
};

export default Nav;