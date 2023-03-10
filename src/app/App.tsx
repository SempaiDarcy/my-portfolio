import {useCallback, useState} from 'react';
import './App.css';
import {Header} from "../Header/Header";
import {Sidebar} from "../Sidebar/Sidebar";

function App() {
    const [open, setOpen] = useState(false)
    const handleClose = useCallback(() => setOpen(false), [])
    const handleOpen = useCallback(() => setOpen(true), [])
    return (
        <div className='App'>
            <Header handleOpen={()=>{}}/>
            <Sidebar open={open} handleClose={handleClose}/>
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
