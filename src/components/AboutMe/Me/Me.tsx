import React from 'react';
import s from './Me.module.css'
import MeText from "./MeText/MeText";
import MeImg from "./MeImg/MeImg";
const Me = () => {
    return (
        <div className={s.me}>
            <MeText/>
            <MeImg/>
        </div>
    );
};

export default Me;