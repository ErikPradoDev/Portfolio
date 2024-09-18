import React from "react";
import '../../styles/components/articles/windowsPage.sass';
import * as Icon from 'react-bootstrap-icons';
import '../../styles/components/images.css';
import { Link } from 'react-router-dom';
import '../../i18n/i18nflts'
import { useTranslation } from 'react-i18next'


export default function WindowsPage(){
    const { t, i18n } = useTranslation();
    return(
        <>
        <main>
            <section id="articleWindows" className="MarginAuto1100px">
                <nav> <Link to={"/"} className="colorTxt"> Home </Link> / <Link to={"/projects"} className="colorTxt"> Projects </Link> / <Link to={"/projects/windows-desktop-erik-prado"} className="colorOrange" > Windows Desktop </Link></nav>
                <div className='titleSize'>
                    <div className='logoProjectCard'>
                        <svg width="70" height="70" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="65" height="65" rx="5"/>
                    <rect width="40" height="40" transform="translate(12 13)"/>
                    <path d="M28.6666 33.855L16.1758 33.8333L16.1766 43.0016C16.1766 43.8341 16.7908 44.5383 17.6149 44.6525L28.6666 46.1816V33.855Z" fill="url(#paint0_linear_0_1)"/>
                    <path d="M30.3335 33.8583V46.4125L45.9352 48.5708C46.9368 48.7092 47.8302 47.9317 47.8302 46.92L47.8335 33.8883L30.3335 33.8583Z" fill="url(#paint1_linear_0_1)"/>
                    <path d="M28.6668 19.88L17.6018 21.4467C16.7793 21.5633 16.1676 22.2675 16.1685 23.0983L16.1785 32.1667H28.6668V19.88Z" fill="url(#paint2_linear_0_1)"/>
                    <path d="M30.3335 19.6442V32.1667H47.8293V19.0859C47.8293 18.0725 46.9327 17.2934 45.9293 17.4359L30.3335 19.6442Z" fill="url(#paint3_linear_0_1)"/>
                    <defs>
                    <linearGradient id="paint0_linear_0_1" x1="20.0858" y1="34.7658" x2="25.8208" y2="44.325" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#1784D8"/>
                    <stop offset="1" stop-color="#0864C5"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_0_1" x1="32.5035" y1="35.6083" x2="49.121" y2="47.0792" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#31ABEC"/>
                    <stop offset="1" stop-color="#1582D5"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_0_1" x1="18.7851" y1="22.7492" x2="33.4901" y2="35.9842" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#31ABEC"/>
                    <stop offset="1" stop-color="#1582D5"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_0_1" x1="33.5943" y1="21.4559" x2="58.6927" y2="38.515" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#54DAFF"/>
                    <stop offset="1" stop-color="#25A2E5"/>
                    </linearGradient>
                    </defs>
                        </svg>
                    </div>
                    <div className="txtProjectCard">
                        <h1> Windows Desktop | Erik Prado </h1>
                        <p> {t('pageProjectWindows.verson')} 1.0.01</p>
                    </div>  
                </div>

                <div className="photoBannerProject backgroundWindowDesktop"></div>

                <div className="linkSizeContainer">
                    <p> <Icon.Github className="icon" /> | {t('pageProjectWindows.LinkGitHub')} <Link to='https://github.com/ErikPradoDev/Portfolio' target="_blank" className="href" >https://github.com/ErikPradoDev/Portfolio</Link> </p>
                    <p> <Icon.Linkedin className="icon" /> | {t('pageProjectWindows.LinkLinkedIn')} <Link to='https://www.linkedin.com/in/erikpradodev/'target="_blank" className="href">https://www.linkedin.com/in/erikpradodev/</Link> </p>
                </div>

                <p className="txt"> {t('pageProjectWindows.p1')}  </p>
                <p className="txt"> {t('pageProjectWindows.p2')} </p>
                <p className="txt"> {t('pageProjectWindows.p3')} </p>
                <p className="txt"> {t('pageProjectWindows.p4')} </p>
                <p className="txt"> {t('pageProjectWindows.p5')} </p>
                <p className="txt"> {t('pageProjectWindows.p6')} </p>
                <p className="txt marginBottom"> {t('pageProjectWindows.p7')} </p>



                


                <div className="photoProjectContainer backgroundLockScreen"></div>
                <p className="imgPSize txt">   <span className="cLight">{t('pageProjectWindows.p8')}</span> {t('pageProjectWindows.p9')} </p>
                
                <div className="photoProjectContainer backgroundWindowDesktop"></div>
                <p className="imgPSize txt"> <span className="cLight">{t('pageProjectWindows.p10')}</span>  {t('pageProjectWindows.p11')} </p>
                
                <div className="photoProjectContainer backgroundErrorPage"></div>
                <p className="imgPSize txt marginBottom">  <span className="cLight">{t('pageProjectWindows.p12')}</span> {t('pageProjectWindows.p13')} </p>
            
                <p className="txt"> {t('pageProjectWindows.p14')} </p>
                <p className="txt"> {t('pageProjectWindows.p15')} </p>
                <p className="txt"> {t('pageProjectWindows.p16')} </p>
                <p className="txt"> {t('pageProjectWindows.p17')} </p>


                <div className="linkSizeContainer">
                <p> <Icon.Github className="icon" /> | {t('pageProjectWindows.LinkGitHub')} <Link to='https://github.com/ErikPradoDev/Portfolio' target="_blank" className="href" >https://github.com/ErikPradoDev/Portfolio</Link> </p>
                <p> <Icon.Linkedin className="icon" /> | {t('pageProjectWindows.LinkLinkedIn')} <Link to='https://www.linkedin.com/in/erikpradodev/'target="_blank" className="href">https://www.linkedin.com/in/erikpradodev/</Link> </p>
                </div>
            
            </section>
        </main>

        </>
    )
}