import {FC} from 'react';
import s from './Header.module.scss'
import {GiHamburgerMenu} from '@react-icons/all-files/gi/GiHamburgerMenu';
import {ContactButtonGroup} from "../ContactButtonGroup/ContactButtonGroup";
import {Navigation} from "./Navigation/Navigation";

type SidebarProps = {
    handleOpen: () => void
}
export const Header: FC<SidebarProps> = ({handleOpen}) => {

    return (
        <header className={s.header}>
            <ContactButtonGroup/>
            <div className={s.mobileNavigation}>
                <GiHamburgerMenu onClick={handleOpen} className={s.burger}/>
            </div>
            <div className={s.desktopNavigation}>
                <Navigation/>
            </div>
        </header>
    )
}