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

            <section id='aboutMe'>
            <div className="MarginAuto1100px flex">
                    <h3>../about</h3>
                    <h2>About me.</h2>
                <div className='lineSection'></div>
                    <p className='txt'> Hello, I'm Erik Prado, currently living in Brazil, and studying computer science at UNICID University. I'm planning to graduate in 2028, and I'm focused on front-end studies, with the goal of specializing in full stack. </p>
                    <p className='txt'> My projects include UX design, responsive layouts with the focus of providing value and a unique experience for users. </p>
                    <p className='txt'> In my free time, I like to go for runs at a local park, I'm always looking to learn more about technology, and I like to play casual games of Chess. Through <Link to='https://www.chess.com/member/lelrikpc' target='_blank'> <span className='colorOrange'>Chess.com</span></Link> we can play together. </p>
                    <p className='txt'> My projects contain user interfaces (UI) and user experiences (UX) that are intuitive, practical and visually pleasing. </p>
                    <p className='txt'> Prioritize clean code development. with easy maintenance, quality and sustainability in projects, with responsive applications ensuring an exceptional user experience. </p>
               </div>
            </section>

            
        </main>

    )
}