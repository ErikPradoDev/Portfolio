import React from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import '../i18n/i18nflts';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Decoration from '../components/Dcoration';

import '../styles/components/projectPage.sass';

export default function ProjectsPage() {
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
                    <h2> {t('sectionProject.title')} </h2>
                    <div className='lineSection'></div>

                    <div className="MarginAuto900px">
                        <p className="txt"> {t('sectionProject.mainP1')} </p>
                        <p className="txt"> {t('sectionProject.mainP2')} </p>

                        <div className="lineBtn marginTop10px">
                            <Link to={'/'}>
                                <button className='btnFill'> <Icon.CaretLeftFill className='iconBtn' /> {t('sectionWelcome.backHome')} </button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>


            <motion.section id='projects'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeOut", duration: 1.5 }}
                viewport={{ once: true }}
            >
                <div className="MarginAuto1100px flex">
                    <h3> {t('sectionProject.subtitle')} </h3>
                    <h2> {t('sectionProject.title')} </h2>
                    <div className='lineSection'></div>

                    <div className='MarginAuto900px'>


                        <Link to={'/projects/windows-desktop-erik-prado'}>
                            <div className='cardProject windows marginBottom20px'>
                                <div className='titleSizeResponsive'>
                                    <div className='logoProjectCard'>
                                        <svg width="50" height="50" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="65" height="65" rx="5" />
                                            <rect width="40" height="40" transform="translate(12 13)" />
                                            <path d="M28.6666 33.855L16.1758 33.8333L16.1766 43.0016C16.1766 43.8341 16.7908 44.5383 17.6149 44.6525L28.6666 46.1816V33.855Z" fill="url(#paint0_linear_0_1)" />
                                            <path d="M30.3335 33.8583V46.4125L45.9352 48.5708C46.9368 48.7092 47.8302 47.9317 47.8302 46.92L47.8335 33.8883L30.3335 33.8583Z" fill="url(#paint1_linear_0_1)" />
                                            <path d="M28.6668 19.88L17.6018 21.4467C16.7793 21.5633 16.1676 22.2675 16.1685 23.0983L16.1785 32.1667H28.6668V19.88Z" fill="url(#paint2_linear_0_1)" />
                                            <path d="M30.3335 19.6442V32.1667H47.8293V19.0859C47.8293 18.0725 46.9327 17.2934 45.9293 17.4359L30.3335 19.6442Z" fill="url(#paint3_linear_0_1)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_0_1" x1="20.0858" y1="34.7658" x2="25.8208" y2="44.325" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#1784D8" />
                                                    <stop offset="1" stop-color="#0864C5" />
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_0_1" x1="32.5035" y1="35.6083" x2="49.121" y2="47.0792" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#31ABEC" />
                                                    <stop offset="1" stop-color="#1582D5" />
                                                </linearGradient>
                                                <linearGradient id="paint2_linear_0_1" x1="18.7851" y1="22.7492" x2="33.4901" y2="35.9842" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#31ABEC" />
                                                    <stop offset="1" stop-color="#1582D5" />
                                                </linearGradient>
                                                <linearGradient id="paint3_linear_0_1" x1="33.5943" y1="21.4559" x2="58.6927" y2="38.515" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#54DAFF" />
                                                    <stop offset="1" stop-color="#25A2E5" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <p> Windows Desktop | Erik Prado </p>
                                </div>

                                <div className='cardPhotoProject backgroundDesktop'>
                                    <div className='txtNew'> <p> <Icon.BookmarkStarFill />  {t('sectionProject.new')} </p></div>
                                </div>
                                <div className='txtProject'>
                                    <div className='titleSizeResponsiveTwo'>
                                        <div className='logoProjectCard'>
                                            <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="40" height="40" fill="#2b2b2b" />
                                                <path d="M16.6666 20.855L4.17578 20.8333L4.17661 30.0016C4.17661 30.8341 4.79078 31.5383 5.61495 31.6525L16.6666 33.1816V20.855Z" fill="url(#paint0_linear_209_183)" />
                                                <path d="M18.3335 20.8583V33.4125L33.9352 35.5708C34.9368 35.7092 35.8302 34.9317 35.8302 33.92L35.8335 20.8883L18.3335 20.8583Z" fill="url(#paint1_linear_209_183)" />
                                                <path d="M16.6668 6.88L5.60179 8.44667C4.77929 8.56334 4.16762 9.26751 4.16846 10.0983L4.17846 19.1667H16.6668V6.88Z" fill="url(#paint2_linear_209_183)" />
                                                <path d="M18.3335 6.6442V19.1667H35.8293V6.08586C35.8293 5.07253 34.9327 4.29336 33.9293 4.43586L18.3335 6.6442Z" fill="url(#paint3_linear_209_183)" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_209_183" x1="8.08578" y1="21.7658" x2="13.8208" y2="31.325" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#1784D8" />
                                                        <stop offset="1" stop-color="#0864C5" />
                                                    </linearGradient>
                                                    <linearGradient id="paint1_linear_209_183" x1="20.5035" y1="22.6083" x2="37.121" y2="34.0792" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#31ABEC" />
                                                        <stop offset="1" stop-color="#1582D5" />
                                                    </linearGradient>
                                                    <linearGradient id="paint2_linear_209_183" x1="6.78512" y1="9.74917" x2="21.4901" y2="22.9842" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#31ABEC" />
                                                        <stop offset="1" stop-color="#1582D5" />
                                                    </linearGradient>
                                                    <linearGradient id="paint3_linear_209_183" x1="21.5943" y1="8.45586" x2="46.6927" y2="25.515" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#54DAFF" />
                                                        <stop offset="1" stop-color="#25A2E5" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>

                                        </div>
                                        <p className='pTitleProject'> Windows Desktop | Erik Prado </p>
                                    </div>

                                    <p className='aboutTxt'> {t('pageProjectWindows.pResume')} </p>

                                    <div>
                                        <p className='techUsed'> {t('sectionProject.tech')} </p>
                                        <div className="techLine">
                                            <p> #SASS </p>
                                            <p> #JavaScript </p>
                                            <p> #Git e GitHub </p>
                                            <p> #Vite </p>
                                            <p> #React </p>
                                            <p> #React Router </p>
                                        </div>
                                    </div>

                                    <div className='lineBtn'>
                                        <Link to="https://github.com/ErikPradoDev/Windows-Desktop-Erik-Prado" target='_blank'>
                                            <button className='btnFill'> <Icon.Github className='iconGitHub' size={20} fill='#18171d' /> GitHub  </button>
                                        </Link>
                                        <Link to="https://windows-desktop-erik-prado.vercel.app/" target='_blank'>
                                            <button className='btnSimple'> <Icon.BoxArrowInUpRight className='iconBtn' /> Deploy </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Link>

















                        <div className='cardProject marginBottom20px'>
                            <div className='titleSizeResponsive'>
                                <div className='logoProjectCard'>
                                    <Icon.CodeSlash className='code' />
                                </div>
                                <p> {t('sectionProject.being')} </p>
                            </div>

                            <div className='cardPhotoProject dev'>
                                <div className='txtDev'> <p> <Icon.Tools />  {t('sectionProject.being')}</p></div>
                                <Icon.Tools />
                            </div>
                            <div className='txtProject'>
                                <div className='titleSizeResponsiveTwo'>
                                    <div className='logoProjectCard'>
                                        <Icon.CodeSlash className='code' />
                                    </div>
                                    <p className='pTitleProject'> {t('sectionProject.being')} </p>
                                </div>

                                <p className='aboutTxt'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis nulla ratione ex qui, laboriosam cumque nemo quasi officiis quae, nam natus vel quas, dolorum reprehenderit pariatur perspiciatis necessitatibus officia. Nihil! </p>

                                <div>
                                    <p className='techUsed'> {t('sectionProject.tech')} </p>
                                    <div className="techLine">
                                        <p> #SASS </p>
                                        <p> #JavaScript </p>
                                        <p> #Git e GitHub </p>
                                        <p> #Vite </p>
                                        <p> #React </p>
                                        <p> #React Router </p>
                                    </div>
                                </div>

                                <div className='lineBtn'>
                                    <button className='btnFill'> <Icon.Github className='iconBtn' /> GitHub </button>
                                    <button className='btnSimple'> <Icon.BoxArrowInUpRight className='iconBtn' /> Deploy </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            <Footer />
        </main>
    )
}