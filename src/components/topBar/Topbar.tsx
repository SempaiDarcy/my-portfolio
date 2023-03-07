import {FC} from 'react';
import s from './topbar.module.scss'
import {ContactButtonGroup} from "../ContactButtonGroup/ContactButtonGroup";
import {Navigation} from "./Navigation/Navigation";
export const Topbar:FC = () => {
    return (
        <div className={s.topbar }>
            <div className={s.wrapper}>
                <div className={s.left}>
                    <a href="#intro" className={s.logo}>WEB.</a>
                    <ContactButtonGroup/>
                </div>
                <div className={s.right}>
                        <Navigation/>
                </div>
            </div>
        </div>
    );
};

