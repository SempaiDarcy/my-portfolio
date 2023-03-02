import React, {useCallback, useState} from 'react';
import s from './App.module.css';
import {Header} from "./components/Header/Header";

function App() {
    const [open,setOpen] = useState(false)
    const handleOpen = useCallback(() => setOpen(true), [])
  return (
    <div className={s.App}>
        <Header handleOpen={handleOpen}/>
    </div>
  );
}

export default App;
