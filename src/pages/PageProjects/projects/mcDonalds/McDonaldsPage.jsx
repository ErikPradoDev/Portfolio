import { main } from 'framer-motion/client'
import * as Icon from 'react-bootstrap-icons';
import './McDonaldsPageModule.sass'
import Decoration from '../../../../components/Decoration'
import { Link } from 'react-router-dom';
import '../../../../i18n/i18nflts';
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion';
import Footer from '../../../../components/Footer';

export default function McDonaldsPage() {
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
                    <h2> McDonalds Website Redesign </h2>
                    <div className='lineSection'></div>

                    <div className="MarginAuto900px">
                        <p className="txt"> {t('pageProjectMcDonalds.pResume')} </p>

                        <div className="techLine marginTop10px">
                            <p> #Bootstrap </p>
                            <p> #Figma </p>
                            <p> #SASS </p>
                            <p> #JavaScript </p>
                            <p> #React </p>
                            <p> #Vite </p>
                            <p> #FramerMotion </p>
                            <p> #Versel </p>
                            <p> #Git e GitHub </p>
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

            <section id='articleMcdonalds' className="MarginAuto900px">

                <motion.section id="text"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeOut", duration: 1.5 }}
                    viewport={{ once: true }}
                >
                    <p className="txt"> {t('pageProjectMcDonalds.p1')} </p>
                    <p className="txt"> {t('pageProjectMcDonalds.p2')} </p>
                </motion.section>

                <motion.section id="firstScreen"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeOut", duration: 1.5 }}
                    viewport={{ once: true }}
                >
                    <h3>{t('pageProjectMcDonalds.pFSection')}</h3>
                    <h2> {t('pageProjectMcDonalds.pFSectionTxt')} </h2>
                    <div className='lineSection'></div>

                    <div className="MarginAuto900px">
                        <div className="photoProjectContainer welcomeMc"></div>
                        <p className="txt"> {t('pageProjectMcDonalds.p3')} </p>
                    </div>
                </motion.section>


                <motion.section id="seccondScreen"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeOut", duration: 1.5 }}
                    viewport={{ once: true }}
                >
                    <h3>{t('pageProjectMcDonalds.pSSection')}</h3>
                    <h2> {t('pageProjectMcDonalds.pSSectionTxt')} </h2>
                    <div className='lineSection'></div>

                    <div className="MarginAuto900px">
                        <div className="photoProjectContainer mc2"></div>
                        <p className="txt"> {t('pageProjectMcDonalds.p4')} </p>
                    </div>
                </motion.section>


                <motion.section id="thirdScreen"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeOut", duration: 1.5 }}
                    viewport={{ once: true }}
                >
                    <h3>{t('pageProjectMcDonalds.pTSection')}</h3>
                    <h2> {t('pageProjectMcDonalds.pTSectionTxt')} </h2>
                    <div className='lineSection'></div>

                    <div className="MarginAuto900px">
                        <div className="photoProjectContainer mc3"></div>
                        <p className="txt"> {t('pageProjectMcDonalds.p5')} </p>
                    </div>
                </motion.section>

                <motion.section id="thirdScreen"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeOut", duration: 1.5 }}
                    viewport={{ once: true }}
                >
                    <h3>{t('pageProjectMcDonalds.pQSection')}</h3>
                    <h2> {t('pageProjectMcDonalds.pQSectionTxt')} </h2>
                    <div className='lineSection'></div>

                    <div className="MarginAuto900px">
                        <div className="photoProjectContainer mc4"></div>
                        <p className="txt"> {t('pageProjectMcDonalds.p6')} </p>
                    </div>
                </motion.section>


            </section>

            < Footer />

        </main>
    )
}