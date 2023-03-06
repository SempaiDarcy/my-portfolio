import React from 'react';
import s from './topbar.module.scss'
import {ContactButtonGroup} from "../ContactButtonGroup/ContactButtonGroup";
import {Navigation} from "./Navigation/Navigation";
export const Topbar = () => {
    return (
        <div className={s.topbar}>
            <div className={s.wrapper}>
                <div className={s.left}>
                    <a href="#intro" className={s.logo}>WEB.</a>
                    <div className={s.buttonGroup}><ContactButtonGroup/></div>
                </div>
                <div className={s.right}>
                        <Navigation/>
                    <div className={s.hamburger}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

