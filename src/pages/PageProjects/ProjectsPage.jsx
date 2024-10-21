import React from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import '../../i18n/i18nflts';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Footer from '../../components/Footer';
import Decoration from '../../components/Decoration';
import './ProjectsPageModule.sass';
import SectionProjects from '../../components/SectionProjects';

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
            < SectionProjects />

            <Footer />
        </main>
    )
}