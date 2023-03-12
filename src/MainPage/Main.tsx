import s from './Main.module.scss'
import style from '../styles/Container.module.scss'
import {FC} from 'react'
import mainPhoto from '../accets/image/photo_to_main.jpg'
import {Particle} from './Particle/Particle';
import {Fade} from 'react-awesome-reveal';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import {ABOUT} from "../constants/constants";


export const Main: FC = () => {


    return (
        <section className={`${s.mainContainer} ${style.container}`} id='mainPage'>
            <Particle/>
            <div className={s.about}>
                <Fade cascade>
                    <span> HELLO, MY NAME IS </span>
                    <h1> {ABOUT.NAME} </h1>
                    <ReactTypingEffect text={ABOUT.POSITION}/>
                </Fade>
            </div>
            <Tilt>
                <img src={mainPhoto} className={s.photo} alt='portfolioMainImg'/>
            </Tilt>

        </section>
    )
}