import React from 'react';
import s from './MeText.module.css'
const MeText = () => {
    return (
        <div className={s.me}>
            <h1>Привет!</h1>
            <h1>Меня зовут Акбар Габдуалиев.</h1>
            <h1>Я front-end разработчик.</h1>
        </div>
    );
};

export default MeText;