import React from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <div className={s.App}>
        <Header/>
        <AboutMe/>
    </div>
  );
}

export default App;
