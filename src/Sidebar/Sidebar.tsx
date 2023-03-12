import {FC, memo} from 'react';
import style from './Sidebar.module.scss'
import {IoCloseSharp} from '@react-icons/all-files/io5/IoCloseSharp';
import {Links} from "../Links/Links";

type SidebarProps = {
    open: boolean
    handleClose: () => void
}
export const Sidebar: FC<SidebarProps> = memo(({open, handleClose}) => {
    const sidebarClass = style.sidebar + (open ? ' ' + style.open : '')
    return (
        <>
            <aside className={sidebarClass}>
                <IoCloseSharp onClick={handleClose} className={style.closeIcon}/>
                <nav className={style.nav}>
                    <Links handleClose={handleClose}/>
                </nav>
            </aside>
        </>
    )
})