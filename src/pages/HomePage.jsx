import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/homePage.sass';


export default function HomePage(){
    return(
        <>
        <section id='welcome' className='bgDecoration'>
            <div className='MarginAuto1100px flex'>
                <div className='photoSize photoProfile'></div>
                <p className='pHi'> Hi, i'm <span> Erik Prado </span ></p>
                <p className='p2'> Front-End Web Developer</p>
                <p className='p3'> Constantly learning about technologies. Chess player and passionate about reading. </p>
                <button> DOWNLOAD CV </button>
            </div>
        </section>
        </>
    )
}