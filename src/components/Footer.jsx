import React from "react";
import * as Icon from 'react-bootstrap-icons';
import '../styles/components/footer.sass'
import '../i18n/i18nflts'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';



export default function Footer(){
    const { t, i18n } = useTranslation();

    return(
        <>
            <section id='contact'>
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

                <div className="MarginAuto1100px flex">
                        <h3> {t('sectionContact.subtitle')} </h3>
                        <h2> {t('sectionContact.title')} </h2>
                            <div className='lineSection'></div>

                <div className='formSize MarginAuto900px'>
                    <p className='txt'> {t('sectionContact.p1')} <Link to='mailto:erikpcdev@gmail.com'> <span className='colorOrange'>erikpcdev@gmail.com</span></Link>. </p>

                    <form>
                            <label> {t('sectionContact.p2')} </label>
                            <input className='inputTxt' type="text" name="" id="" />

                            <label> {t('sectionContact.p3')} </label>
                            <input className='inputTxt' type="email" name="" id="" />

                        



                        <label> {t('sectionContact.p4')} </label>
                        <textarea>

                        </textarea>

                        <div className='lineBtn'>
                            <button className="btnFill" type="submit"> <Icon.SendCheckFill className="iconBtn" /> Enviar </button>
                        </div>
                    </form>

                </div>
                </div>
            </section>

        <footer className="flex">
            <p> Made with <Icon.HeartFill className="iconHeart"/> by <span>Erik Prado</span>.</p>
        </footer>       
        
        </>

    )
}