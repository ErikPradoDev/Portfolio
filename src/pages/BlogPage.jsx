import React from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import '../i18n/i18nflts';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';


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

                <div className="MarginAuto1100px">
                    <motion.h3
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeOut", duration: 1.5 }}
                        viewport={{ once: true }}
                    >../blog</motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeOut", duration: 1.5 }}
                        viewport={{ once: true }}
                    > {t('sectionBlog.title')} </motion.h2>
                    <motion.div className='lineSection'
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeOut", duration: 1.5 }}
                        viewport={{ once: true }}
                    ></motion.div>

                    <div className="MarginAuto900px">
                        <motion.p className="txt"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ ease: "easeOut", duration: 2 }}
                            viewport={{ once: true }}
                        > {t('sectionBlog.mainP1')} </motion.p>
                        <motion.p className="txt"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ ease: "easeOut", duration: 2 }}
                            viewport={{ once: true }}
                        > {t('sectionBlog.mainP2')} </motion.p>

                        <div className="lineBtn marginTop10px">
                            <Link to={'/'}>
                                <motion.button className='btnFill'
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ ease: "easeOut", duration: 2 }}
                                    viewport={{ once: true }}
                                > <Icon.CaretLeftFill className='iconBtn' /> {t('sectionWelcome.backHome')} </motion.button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            <section id='articles' className="MarginAuto1100px">
                <motion.h3
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeOut", duration: 1.5 }}
                    viewport={{ once: true }}
                > {t('sectionBlog.subtitle')} </motion.h3>
                <motion.h2
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeOut", duration: 1.5 }}
                    viewport={{ once: true }}
                > {t('sectionBlog.title2')} </motion.h2>
                <motion.div className='lineSection'
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeOut", duration: 1.5 }}
                    viewport={{ once: true }}
                ></motion.div>

                <div className='MarginAuto900px'>


                    <Link to='/blog/article-creative-process-in-creating-a-website'>
                        <motion.div className='blogCardSize'
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ ease: "easeOut", duration: 1.5 }}
                            viewport={{ once: true }}
                        >
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
                        </motion.div>
                    </Link>

                    <motion.div className='blogCardSize marginTop'
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeOut", duration: 1.5 }}
                        viewport={{ once: true }}
                    >
                        <div className='imgBlogSize'>
                            <Icon.PencilSquare className='iconLamp' />
                        </div>
                        <p className='titleBlog'> {t('sectionBlog.titleBlog2')} </p>
                        <p className='postBlog'> {t('sectionBlog.dateBlog2')} </p>
                        <div className='lineSection'></div>
                        <p className='aboutTxtBlog'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic fugit maiores aperiam tempore rerum earum? Reprehenderit quibusdam dolor placeat ut quas eligendi atque quisquam. Qui sequi optio unde corrupti quas. </p>
                        <div className='lineBtn'>
                            <button className='btnFill'> <Icon.FileTextFill className='iconBtn' /> Read Article </button>
                            <p className='pTxtReading'>  <Icon.ClockFill className='iconClock' /> 5 minutes reading time. </p>
                        </div>
                </motion.div>





            </div>
        </section>
        </main >
    )
}