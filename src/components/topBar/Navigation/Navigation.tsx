import React, {FC} from 'react';
import s from './Navigation.module.scss'
export const Navigation:FC = () => {
    return (
        <div className={s.nav}>
            <a>Home</a>
            <a>Skills</a>
            <a>Projects</a>
            <a>Contacts</a>
        </div>
    );
};

