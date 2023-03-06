import React from "react";

import {AiFillLinkedin} from "@react-icons/all-files/ai/AiFillLinkedin";
import {AiOutlineMail} from "@react-icons/all-files/ai/AiOutlineMail";
import {AiFillGithub} from "@react-icons/all-files/ai/AiFillGithub";
import {FaTelegramPlane} from "@react-icons/all-files/fa/FaTelegramPlane";
import {SiCodewars} from "@react-icons/all-files/si/SiCodewars";


export const ContactButtonGroup = () => {
    return (
        <div>
                <AiFillLinkedin/>
                <AiOutlineMail/>
                <AiFillGithub/>
                <FaTelegramPlane/>
                <SiCodewars/>
        </div>
    )
}