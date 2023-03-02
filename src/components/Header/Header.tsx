import {FC} from 'react';
import s from './Header.module.css'
import Nav from "./Nav/Nav";

type SidebarProps = {
    handleOpen:()=>void
}
export const Header: FC<SidebarProps> = ({handleOpen}) => {
    return (
        <header className={s.header}>
            <div className={s.desktopNavigation}>
                <div className={s.logo}>WEB</div>
                <Nav handleOpen={handleOpen}/>
            </div>
        </header>
    );
};
