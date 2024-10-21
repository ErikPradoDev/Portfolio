import React from "react";
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import '../../../../i18n/i18nflts';
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion';
import Footer from "../../../../components/Footer";
import Decoration from "../../../../components/Decoration";
import './WindowsPageModule.sass';


export default function WindowsPage() {
    const { t, i18n } = useTranslation();
    return (
            <main>
                <section id="welcome">
                    <Decoration />

                    <motion.div className="MarginAuto1100px"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeOut", duration: 1.5 }}
                        viewport={{ once: true }}
                    >
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

                            <div className='center lineBtn'>
                                <Link to="https://github.com/ErikPradoDev/Windows-Desktop-Erik-Prado" target='_blank'>
                                    <button className='btnFill'> <Icon.Github className='iconGitHub' size={20} fill='#18171d' /> GitHub  </button>
                                </Link>
                                <Link to="https://windows-desktop-erik-prado.vercel.app/" target='_blank'>
                                    <button className='btnSimple'> <Icon.BoxArrowInUpRight className='iconBtn' /> Deploy </button>
                                </Link>

                            </div>
                        </div>
                    </motion.div>
                </section>

                <section id="articleWindows" className="MarginAuto900px">
                    <motion.section id="text"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeOut", duration: 1.5 }}
                        viewport={{ once: true }}
                    >
                        <p className="txt"> {t('pageProjectWindows.p1')} </p>
                        <p className="txt"> {t('pageProjectWindows.p2')} </p>
                        <p className="txt"> {t('pageProjectWindows.p3')} </p>
                    </motion.section>


                    <motion.section id="firstScreen"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeOut", duration: 1.5 }}
                        viewport={{ once: true }}
                    >
                        <h3>{t('pageProjectWindows.pFirstScren')}</h3>
                        <h2> {t('pageProjectWindows.pLockScreen')} </h2>
                        <div className='lineSection'></div>

                        <div className="MarginAuto900px">
                            <div className="photoProjectContainer backgroundLockScreen"></div>
                            <p className=" txt"> {t('pageProjectWindows.p4')} </p>
                            <p className=" txt"> {t('pageProjectWindows.p5')} </p>
                        </div>
                    </motion.section>


                    <motion.section id="seccondScreen"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeOut", duration: 1.5 }}
                        viewport={{ once: true }}
                    >
                        <h3>{t('pageProjectWindows.pSeccondScren')}</h3>
                        <h2> {t('pageProjectWindows.pDesktopScreen')} </h2>
                        <div className='lineSection'></div>

                        <div className="MarginAuto900px">
                            <div className="photoProjectContainer backgroundDesktop"></div>
                            <p className=" txt"> {t('pageProjectWindows.p6')} </p>
                        </div>
                    </motion.section>


                    <motion.section id="thirdScreen"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeOut", duration: 1.5 }}
                        viewport={{ once: true }}
                    >
                        <h3>{t('pageProjectWindows.pThirdScren')}</h3>
                        <h2> {t('pageProjectWindows.pErrorPage')} </h2>
                        <div className='lineSection'></div>

                        <div className="MarginAuto900px">
                            <div className="photoProjectContainer backgroundErroPage"></div>
                            <p className="txt"> {t('pageProjectWindows.p7')} <br /> {t('pageProjectWindows.p8')} </p>
                        </div>
                    </motion.section>
                </section>

                <Footer />
            </main>
    )
}