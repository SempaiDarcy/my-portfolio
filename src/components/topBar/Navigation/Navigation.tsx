import React, {FC, useState} from 'react';
import s from './Navigation.module.scss'
import {AiOutlineClose} from "@react-icons/all-files/ai/AiOutlineClose";
import {AiOutlineMenu} from "@react-icons/all-files/ai/AiOutlineMenu";

export const Navigation:FC = () => {
    const [menuOpen,setMenuOpen] = useState(false);
    const onClickHandler = () => {
        setMenuOpen(!menuOpen)
        console.log()
        console.log('work')
    }
    return (
        <>
            <div className={s.nav}>
                <a>Home</a>
                <a>Skills</a>
                <a>Projects</a>
                <a>Contacts</a>
            </div>
            <div className={s.hamburger} onClick={onClickHandler}>
                {menuOpen ? <AiOutlineClose size={35}/> : <AiOutlineMenu size={35}/>}
            </div>
        </>
    );
};

