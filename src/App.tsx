import React from 'react';
import s from './App.module.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/main/Main";

function App() {
  return (
    <div className={s.App}>
        <Header/>
        <Main/>
    </div>
  );
}

export default App;
