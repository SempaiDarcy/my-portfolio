import React from "react";
import s from './ContactButtonGroup.module.scss'
import {AiFillLinkedin} from "@react-icons/all-files/ai/AiFillLinkedin";
import {AiOutlineMail} from "@react-icons/all-files/ai/AiOutlineMail";
import {AiFillGithub} from "@react-icons/all-files/ai/AiFillGithub";
import {FaTelegramPlane} from "@react-icons/all-files/fa/FaTelegramPlane";
import {SiCodewars} from "@react-icons/all-files/si/SiCodewars";


export const ContactButtonGroup = () => {
    return (
        <div className={s.iconsContainer}>
            <a href="#intro" className={s.logo}>WEB.</a>

            <a target='_blank' rel='noreferrer'>
                <AiFillLinkedin className={s.icon}/>
            </a>

            <a >
                <AiOutlineMail className={s.icon}/>
            </a>


            <a  target='_blank' rel='noreferrer'>
                <AiFillGithub className={s.icon}/>
            </a>

            <a target='_blank' rel='noreferrer'>
                <FaTelegramPlane className={s.icon}/>
            </a>
            <a  target='_blank' rel='noreferrer'>
                <SiCodewars className={s.icon}/>
            </a>

        </div>
    )
}