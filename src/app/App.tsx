import {useCallback, useState} from 'react';
import './App.css';
import {Header} from "../Header/Header";

function App() {
    const [open, setOpen] = useState(false)
    const handleClose = useCallback(() => setOpen(false), [])
    const handleOpen = useCallback(() => setOpen(true), [])
    return (
        <div className='App'>
            <Header handleOpen={()=>{}}/>
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
