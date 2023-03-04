import React from 'react';
import s from './topbar.module.scss'

export const Topbar = () => {
    return (
        <div className={s.topbar}>
            <div className={s.wrapper}>
                <div className={s.left}>
                    <a href="#intro" className={s.logo}>WEB.</a>
                </div>
                <div>
                </div>
                <div className={s.right}>
                    <div>
                        <a>Home</a>
                        <a>Skills</a>
                        <a>Projects</a>
                        <a>Contacts</a>
                    </div>
                    <div className={s.icon}>BurgerMenu</div>
                </div>
            </div>
        </div>
    );
};

