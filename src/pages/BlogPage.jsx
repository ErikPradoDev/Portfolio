import React from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import '../i18n/i18nflts';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';


import '../styles/components/blogPage.sass';

export default function BlogPage() {
    const { t, i18n } = useTranslation();
    return (
        <main>
            <section id="welcome">

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

                <motion.div className="MarginAuto1100px"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeOut", duration: 1.5 }}
                    viewport={{ once: true }}
                >
                    <h3>../blog</h3>
                    <h2> {t('sectionBlog.title')} </h2>
                    <div className='lineSection'></div>

                    <div className="MarginAuto900px">
                        <p className="txt"> {t('sectionBlog.mainP1')} </p>
                        <p className="txt"> {t('sectionBlog.mainP2')} </p>

                        <div className="lineBtn marginTop10px">
                            <Link to={'/'}>
                                <button className='btnFill'> <Icon.CaretLeftFill className='iconBtn' /> {t('sectionWelcome.backHome')} </button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>


            <motion.section id='articles' className="MarginAuto1100px"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeOut", duration: 1.5 }}
                viewport={{ once: true }}
            >
                <h3> {t('sectionBlog.subtitle')} </h3>
                <h2> {t('sectionBlog.title2')} </h2>
                <div className='lineSection'></div>

                <div className='lineBlog MarginAuto900px'>

                    <Link to='/blog/article-creative-process-in-creating-a-website'>
                        <div className='blogCard'>
                            <div className='imgBlogSize'>
                                <Icon.LightbulbFill className='iconLamp' />
                            </div>
                            <p className='titleBlog'> {t('sectionBlog.titleBlog1')} </p>
                            <p className='postBlog'> {t('sectionBlog.dateBlog1')} </p>
                            <div className='lineSection'></div>
                            <p className='aboutTxtBlog'> {t('sectionBlog.blog1Resume')} </p>
                            <div className='lineBtn'>
                                <button className='btnFill'> <Icon.FileTextFill className='iconBtn' /> {t('sectionBlog.readArticle')} </button>
                                <p className='pTxtReading'>  <Icon.ClockFill className='iconClock' /> 5 {t('sectionBlog.timeReading')} </p>
                            </div>
                        </div>
                    </Link>

                    <div className='blogCard'>
                        <div className='imgBlogSize'>
                            <Icon.PencilSquare className='iconLamp' />
                        </div>
                        <p className='titleBlog'> {t('sectionBlog.titleBlog2')} </p>
                        <p className='postBlog'> {t('sectionBlog.dateBlog2')} </p>
                        <div className='lineSection'></div>
                        <p className='aboutTxtBlog'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic fugit maiores aperiam tempore rerum earum? Reprehenderit quibusdam dolor placeat ut quas eligendi atque quisquam. Qui sequi optio unde corrupti quas. </p>
                        <div className='lineBtn'>
                            <button className='btnFill'> <Icon.FileTextFill className='iconBtn' /> {t('sectionBlog.readArticle')} </button>
                            <p className='pTxtReading'>  <Icon.ClockFill className='iconClock' /> 5 {t('sectionBlog.timeReading')} </p>
                        </div>
                    </div>
                </div>
            </motion.section>

            <Footer />
        </main >
    )
}