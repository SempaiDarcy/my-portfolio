import React from "react";

import {AiFillLinkedin} from "@react-icons/all-files/ai/AiFillLinkedin";
import {AiOutlineMail} from "@react-icons/all-files/ai/AiOutlineMail";
import {AiFillGithub} from "@react-icons/all-files/ai/AiFillGithub";
import {FaTelegramPlane} from "@react-icons/all-files/fa/FaTelegramPlane";
import {SiCodewars} from "@react-icons/all-files/si/SiCodewars";
import s from './ContactButtonGroup.module.scss'

export const ContactButtonGroup = () => {
    return (
        <div className={s.buttonGroup}>
                <AiFillLinkedin className={s.icon}/>
                <AiOutlineMail className={s.icon}/>
                <AiFillGithub className={s.icon}/>
                <FaTelegramPlane className={s.icon}/>
                <SiCodewars className={s.icon}/>
        </div>
    )
}