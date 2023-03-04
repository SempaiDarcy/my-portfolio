import React from 'react';
import s from './App.module.scss';
import {Topbar} from "./components/topBar/Topbar";
import {Intro} from "./components/intro/Intro";
import {Portfolio} from "./components/portfolio/Portfolio";
import {Works} from "./components/works/Works";
import {Testimonials} from "./components/testimonials/Testimonials";
import {Contact} from "./components/contact/Contact";

function App() {
    return (
        <div className={s.App}>
            <Topbar/>
            <div className={s.sections}>
                <Intro/>
                <Portfolio/>
                <Works/>
                <Testimonials/>
                <Contact/>
            </div>
        </div>
    );
}

export default App;
