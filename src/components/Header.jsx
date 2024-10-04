import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../styles/components/header.sass'
import '../i18n/i18nflts';
import { useTranslation } from 'react-i18next';
import * as Icon from 'react-bootstrap-icons';
import '../styles/main.sass'
import { motion } from 'framer-motion';



export default function Header() {
    const { t, i18n } = useTranslation();

    const [showTranslate, setShow] = useState(false);

    const onShowClickBtnTranslate = () => {
        if (showTranslate == false) {
            setShow(true);
        } else setShow(false);
    };


    const [showMenu, setShowView] = useState(false);

    const onShowClickBtnMenu = () => {
        if (showMenu == false) {
            setShowView(true);
        } else setShowView(false);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <header>
            <div className='MarginAuto1000px container'>
                <div>
                    <Link to='/'> <p className='pLogo'> <span className='colorOrange'>&lt;</span>Epc <span className='colorOrange'>/&gt;</span> <span className='backHover'> {t('header.txtHover')} </span> </p> </Link>
                </div>
                <div>
                    <nav>
                        <button className="btnTranslate" onClick={onShowClickBtnTranslate}>
                            <Icon.Translate className='iconTranslate' size={20} fill='#FFF' />


                            {showTranslate &&
                                <div className='translateContainerSize'>
                                    <p> {t('header.lang')}  </p>
                                    <div className='lineDct'></div>
                                    <button onClick={() => changeLanguage('en')}>
                                        <span className='colorOrange'>#</span> English - US
                                    </button>
                                    <button onClick={() => changeLanguage('pt')}>
                                        <span className='colorOrange'>#</span> Português - BR
                                    </button>
                                </div>
                            }
                        </button>

                        <button className="btnMenu" id="btnMenu" onClick={onShowClickBtnMenu}>
                            <div className="lineSizeBtn"></div>
                            <div className="lineSizeBtn"></div>
                            <div className="lineSizeBtn"></div>

                            {showMenu &&
                                <div className="containerMenu">
                                    <motion.nav
                                        initial={{ opacity: 0, x: -100 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ ease: "easeOut", duration: 1.5 }}
                                        viewport={{ once: true }}
                                    >
                                        <ul id="menuResponsive02">
                                            <p> {t('header.nav')} </p>
                                            <div className='lineDct'></div>

                                            <Link to='/'>
                                                <li>
                                                    <span className='itemNav'> <span className='colorOrange mrgnLeft'>#</span> Home  </span>
                                                </li>
                                            </Link>

                                            <Link to='/blog'>
                                                <li>
                                                    <span className='itemNav'> <span className='colorOrange mrgnLeft'>#</span> Blog </span>
                                                </li>
                                            </Link>

                                            <Link to='/projects'>
                                                <li>
                                                    <span className='itemNav'> <span className='colorOrange mrgnLeft'>#</span> {t('header.Projects')} </span>
                                                </li>
                                            </Link>
                                        </ul>
                                    </motion.nav>
                                    <motion.div className="btnContainer"
                                        initial={{ opacity: 0, x: -100 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ ease: "easeOut", duration: 1.5 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className='center lineBtn center'>
                                            <Link to="https://github.com/ErikPradoDev" target='_blank'>
                                                <button className='btnSimple'> <Icon.Github className='iconGitHub' size={20} fill='#F87E00' /> GitHub  </button>
                                            </Link>
                                            <Link to="https://www.linkedin.com/in/erikpradodev/" target='_blank'>
                                                <button className='btnSimple'> <Icon.Linkedin className='iconLinkedIn' size={20} fill='#F87E00' /> LinkedIn  </button>
                                            </Link>
                                        </div>
                                    </motion.div>
                                </div>
                            }
                        </button>


                        <ul id="menuResponsive01" >
                            <li>
                                <Link to='/'> <span className='itemNav'> <span className='colorOrange'>#</span> Home  </span> </Link>
                            </li>

                            <li>
                                <Link to='/blog'> <span className='itemNav'> <span className='colorOrange mrgnLeft'>#</span> Blog </span>  </Link>
                            </li>
                            <li>
                                <Link to='/projects'> <span className='itemNav'> <span className='colorOrange mrgnLeft'>#</span> {t('header.Projects')} </span> </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}