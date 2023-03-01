import React from 'react';
import s from './MeImg.module.css'
import image1 from '../../../images/image1.jpg'
const MeImg = () => {
    return (
        <div className={s.meImg}>
            <img src={image1} alt=""/>
        </div>
    );
};

export default MeImg;