import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/homePage.sass';


export default function HomePage(){
    return(
        <main>
            <section id='welcome' className='bgDecoration'>
                <div className='MarginAuto1100px flex'>
                    <div className='photoSize photoProfile'></div>
                    <p className='pHi'> Hi, i'm <span> Erik Prado </span ></p>
                    <p className='p2'> Front-End Web Developer</p>
                    <p className='p3'> Constantly learning about technologies. Chess player and passionate about reading. </p>
                    <button> DOWNLOAD CV </button>
                </div>
            </section>

            <section id='numberInfo'>
                <div className="MarginAuto1100px flex">
                    <Link to="https://github.com/ErikPradoDev" target='_blank'>
                        <div className='numberInfoSize'>
                            <p className='number'>+50</p>
                            <p className='codeTxt'> Code <br /> commits </p>
                        </div>
                    </Link>
                    <Link to='/projects'>
                        <div className='numberInfoSize'>
                            <p className='number'>02</p>
                            <p className='codeTxt'> Projects <br /> completed </p>
                        </div>
                    </Link>
                    <Link to=''>
                        <div className='numberInfoSize'>
                            <p className='number'>08</p>
                            <p className='codeTxt'> Techonologies <br /> mastered </p>
                        </div>
                    </Link>
                    <Link to='/blog'>
                        <div className='numberInfoSize'>
                            <p className='number'>04</p>
                            <p className='codeTxt'> Wriiten <br /> articles </p>
                        </div>
                    </Link>
                </div>
            </section>
        </main>

    )
}