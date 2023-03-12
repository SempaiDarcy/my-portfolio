import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../constants/constants";

type LinksPropsType = {
    handleClose?: () =>void
}
export const Links:FC<LinksPropsType> = ({handleClose}) => {
    return (
        <>
            <NavLink to={PATH.MAIN}>Home</NavLink>
            <NavLink to={PATH.MAIN}>Skills</NavLink>
            <NavLink to={PATH.MAIN}>Projects</NavLink>
            <NavLink to={PATH.MAIN}>Contact</NavLink>
        </>
    );
};
