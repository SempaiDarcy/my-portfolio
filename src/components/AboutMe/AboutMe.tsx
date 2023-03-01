import React from 'react';
import s from './AboutMe.module.css'
import Me from "./Me/Me";
const AboutMe = () => {
    return (
        <div className={s.block1}>
            <Me/>
        </div>
    );
};

export default AboutMe;