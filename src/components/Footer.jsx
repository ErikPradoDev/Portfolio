import React from "react";
import * as Icon from 'react-bootstrap-icons';
import '../styles/components/footer.sass'
import '../i18n/i18nflts'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';



export default function Footer() {
    const { t, i18n } = useTranslation();

    return (
        <>
            <section id='contact'>
                <div className='circleDctBottom'>
                    <p> <Icon.CircleFill className='circleDctSize' /> <Icon.CircleFill className='circleDctSize' />  </p>
                    <p> <Icon.CircleFill className='circleDctSize' /> <Icon.CircleFill className='circleDctSize' /> <Icon.CircleFill className='circleDctSize' /> <Icon.CircleFill className='circleDctSize' />  </p>
                    <p> <Icon.CircleFill className='circleDctSize' /> <Icon.CircleFill className='circleDctSize' /> <Icon.CircleFill className='circleDctSize' /> <Icon.CircleFill className='circleDctSize' />  </p>
                    <p> <Icon.CircleFill className='circleDctSize' /> <Icon.CircleFill className='circleDctSize' /> <Icon.CircleFill className='circleDctSize' /> <Icon.CircleFill className='circleDctSize' /> <Icon.CircleFill className='circleDctSize' /> </p>
                    <p> <Icon.CircleFill className='circleDctSize' /> <Icon.CircleFill className='circleDctSize' /> <Icon.CircleFill className='circleDctSize' /> <Icon.CircleFill className='circleDctSize' /> <Icon.CircleFill className='circleDctSize' /> </p>

                </div>

                <div className='circleDctTop'>
                    <p> <Icon.CircleFill className='circleDctSize' /> <Icon.CircleFill className='circleDctSize' /> <Icon.CircleFill className='circleDctSize' /> <Icon.CircleFill className='circleDctSize' /> <Icon.CircleFill className='circleDctSize' />  </p>
                    <p> <Icon.CircleFill className='circleDctSize' /> <Icon.CircleFill className='circleDctSize' /> <Icon.CircleFill className='circleDctSize' /> <Icon.CircleFill className='circleDctSize' /> <Icon.CircleFill className='circleDctSize' />  </p>
                    <p> <Icon.CircleFill className='circleDctSize circleNone' /> <Icon.CircleFill className='circleDctSize' /> <Icon.CircleFill className='circleDctSize' /> <Icon.CircleFill className='circleDctSize' /> <Icon.CircleFill className='circleDctSize' />  </p>
                    <p> <Icon.CircleFill className='circleDctSize circleNone' /> <Icon.CircleFill className='circleDctSize' /> <Icon.CircleFill className='circleDctSize' /> <Icon.CircleFill className='circleDctSize' /> <Icon.CircleFill className='circleDctSize' /> </p>
                    <p> <Icon.CircleFill className='circleDctSize circleNone' /> <Icon.CircleFill className='circleDctSize circleNone' /> <Icon.CircleFill className='circleDctSize circleNone' /> <Icon.CircleFill className='circleDctSize' /> <Icon.CircleFill className='circleDctSize' /> </p>

                </div>

                <motion.div className="MarginAuto1100px flex"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeOut", duration: 1.5 }}
                    viewport={{ once: true }}
                >
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
                            <input className='inputTxt' type="text" name="" id="" />

                            <label> {t('sectionContact.p5')} </label>
                            <textarea>
                            </textarea>

                            <div className='lineBtn'>
                                <button className="btnFill" type="submit"> <Icon.SendCheckFill className="iconBtn" /> Enviar </button>
                            </div>
                        </form>

                    </div>
                </motion.div>
            </section>

            <footer className="flex">
                <motion.p
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeOut", duration: 1.5 }}
                    viewport={{ once: true }}
                > {t('footer.madeWith')} <Icon.HeartFill className="iconHeart" /> {t('footer.by')} <span>Erik Prado</span>.</motion.p>
            </footer>

        </>

    )
}