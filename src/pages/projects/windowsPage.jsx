import React from "react";
import '../../styles/components/projects/windowsPage.sass';
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
            <section id="welcome">

            <div className='circleDctBottom'>
                    <p> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/>  </p>
                    <p> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/>  </p>
                    <p> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/>  </p>
                    <p> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> </p>
                    <p> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> </p>

                </div>

                <div className='circleDctTop'>
                    <p> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/>  </p>
                    <p> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/>  </p>
                    <p> <Icon.CircleFill className='circleDctSize circleNone'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/>  </p>
                    <p> <Icon.CircleFill className='circleDctSize circleNone'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> </p>
                    <p> <Icon.CircleFill className='circleDctSize circleNone'/> <Icon.CircleFill className='circleDctSize circleNone'/> <Icon.CircleFill className='circleDctSize circleNone'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> </p>

                </div>

                <div className="MarginAuto1100px">
                    <h3> {t('sectionProject.subtitle')} </h3>
                    <h2> Windows Desktop | Erik Prado </h2>
                    <div className='lineSection'></div>

                    <div className="MarginAuto900px">
                    <p className="txt"> {t('pageProjectWindows.pResume')} </p>

                    <div className="techLine marginTop10px">
                         <p> #SASS </p>
                         <p> #JavaScript </p>
                         <p> #Git e GitHub </p>
                         <p> #Vite </p>
                         <p> #React </p>
                         <p> #React Router </p>
                    </div>

                    <div className="linkSizeContainer">
                        <p> <Icon.Github className="icon" /> | {t('pageProjectWindows.LinkGitHub')} <Link to='https://github.com/ErikPradoDev/Portfolio' target="_blank" className="href" >https://github.com/ErikPradoDev/Portfolio</Link> </p>
                        <p> <Icon.Linkedin className="icon" /> | {t('pageProjectWindows.LinkLinkedIn')} <Link to='https://www.linkedin.com/in/erikpradodev/'target="_blank" className="href">https://www.linkedin.com/in/erikpradodev/</Link> </p>
                    </div>
                    </div>
                </div>
            </section>

            <section id="articleWindows" className="MarginAuto900px">

                <p className="txt"> {t('pageProjectWindows.p1')} </p>
                <p className="txt"> {t('pageProjectWindows.p2')} </p>
                <p className="txt"> {t('pageProjectWindows.p3')} </p>
                <p className="txt"> {t('pageProjectWindows.p4')}</p>

                <p className="imgPSize txt">   <span className="cLight"> {t('pageProjectWindows.p5')} </span> </p>
                <div className="photoProjectContainer backgroundLockScreen"></div>
                <p className="imgPTxt txt"> {t('pageProjectWindows.p6')} </p>
                
                <p className="imgPSize txt">   <span className="cLight"> {t('pageProjectWindows.p7')} </span> </p>
                <div className="photoProjectContainer backgroundDesktop"></div>
                <p className="imgPTxt txt"> {t('pageProjectWindows.p8')} </p>
                
                <p className="imgPSize txt">   <span className="cLight"> {t('pageProjectWindows.p9')} </span> </p>
                <div className="photoProjectContainer backgroundErroPage"></div>
                <p className="imgPTxt txt"> {t('pageProjectWindows.p10')} <br /> {t('pageProjectWindows.p11')} </p>
            </section>
        </main>

        </>
    )
}