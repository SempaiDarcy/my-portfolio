import {useCallback, useState} from 'react';
import './App.css';
import {Header} from "../Header/Header";
import {Sidebar} from "../Sidebar/Sidebar";
import {Main} from "../MainPage/Main";

function App() {
    const [open, setOpen] = useState(false)
    const handleClose = useCallback(() => setOpen(false), [])
    const handleOpen = useCallback(() => setOpen(true), [])
    return (
        <div className='App'>
            <Header handleOpen={handleOpen}/>
            <Sidebar open={open} handleClose={handleClose}/>
            <Main/>
        </div>
    );
}

export default App;
