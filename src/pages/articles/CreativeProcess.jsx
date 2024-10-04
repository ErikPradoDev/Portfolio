import React from "react";
import '../../styles/components/articles/creativeProcess.sass';
import * as Icon from 'react-bootstrap-icons';
import '../../styles/components/images.css';
import { Link } from 'react-router-dom';
import '../../i18n/i18nflts';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Footer from "../../components/Footer";
import Decoration from "../../components/Dcoration";

export default function CreativeProcess() {
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
                    <h3>../blog</h3>
                    <h2> {t('sectionBlog.titleBlog1')} </h2>
                    <div className='lineSection'></div>

                    <div className="MarginAuto900px">
                        <p className="txt"
                        > {t('sectionBlog.blog1Resume')} </p>
                        <p className="txt"
                        > {t('sectionBlog.blog1Convite')} </p>

                        <div className="techLine marginTop10px">
                            <p className='pTxtReading'>  <Icon.ClockFill className='iconClock' /> 5 {t('sectionBlog.timeReading')} </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            <section id="article" className="MarginAuto1100px">
                <motion.section id="Initial" className="MarginAuto900px"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeOut", duration: 1.5 }}
                    viewport={{ once: true }}
                >
                    <p className="txt"> {t('sectionBlog.p2')}  </p>
                    <p className="txt"> {t('sectionBlog.p2')}  </p>
                    <p className="txt"> {t('sectionBlog.p2')}  </p>
                    <p className="txt"> {t('sectionBlog.p2')}  </p>

                    <ul>
                        <li> <p>  <span className="step"> {t('sectionBlog.1stStep')}  </span> <span className="tropic"> {t('sectionBlog.1stStepTitle')} </span></p> </li>
                        <li> <p>  <span className="step"> {t('sectionBlog.2stStep')}  </span> <span className="tropic"> {t('sectionBlog.2stStepTitle')} </span></p> </li>
                        <li> <p>  <span className="step"> {t('sectionBlog.3stStep')}  </span> <span className="tropic"> {t('sectionBlog.3stStepTitle')} </span></p> </li>
                        <li> <p>  <span className="step"> {t('sectionBlog.4stStep')}  </span> <span className="tropic"> {t('sectionBlog.4stStepTitle')} </span></p> </li>
                        <li> <p>  <span className="step"> {t('sectionBlog.5stStep')}  </span> <span className="tropic"> {t('sectionBlog.5stStepTitle')} </span></p> </li>
                        <li> <p>  <span className="step"> {t('sectionBlog.6stStep')}  </span> <span className="tropic"> {t('sectionBlog.6stStepTitle')} </span></p> </li>
                    </ul>
                </motion.section>





                <motion.section id="1Step"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeOut", duration: 1.5 }}
                    viewport={{ once: true }}
                >
                    <h3 className="tropics"> {t('sectionBlog.1stStep')} </h3>
                    <h2> {t('sectionBlog.1stStepTitle')} </h2>
                    <div className='lineSection'></div>

                    <div className="MarginAuto900px">
                        <p className="txt">  {t('sectionBlog.1stP1')}  </p>
                        <p className="txt">  {t('sectionBlog.1stP2')}  </p>
                    </div>
                </motion.section>


                <motion.section id="2Step"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeOut", duration: 1.5 }}
                    viewport={{ once: true }}
                >
                    <h3 className="tropics"> {t('sectionBlog.2stStep')} </h3>
                    <h2 > {t('sectionBlog.2stStepTitle')} </h2>
                    <div className='lineSection'></div>
                    <div className="MarginAuto900px">
                        <p className="txt"> {t('sectionBlog.2stP1')} </p>
                        <p className="txt"> {t('sectionBlog.2stP2')} </p>
                        <p className="txtQuestion"> {t('sectionBlog.2stP3')} </p>
                        <p className="txtAnswer"> {t('sectionBlog.2stP4')} </p>

                        <p className="txtQuestion"> {t('sectionBlog.2stP5')} </p>
                        <p className="txtAnswer"> {t('sectionBlog.2stP6')}</p>

                        <p className="txtQuestion"> {t('sectionBlog.2stP7')} </p>
                        <p className="txtAnswer"> {t('sectionBlog.2stP8')}  </p>

                        <p className="txtQuestion"> {t('sectionBlog.2stP9')} </p>
                        <p className="txtAnswer"> {t('sectionBlog.2stP10')} <br /> {t('sectionBlog.2stP11')} </p>

                        <p className="txtQuestion"> {t('sectionBlog.2stP12')} </p>
                        <p className="txtAnswer lastAnswer"> {t('sectionBlog.2stP13')} </p>

                        <p className="txt"> {t('sectionBlog.2stP14')} </p>
                        <p className="txt"> {t('sectionBlog.2stP15')} </p>
                    </div>
                </motion.section>


                <motion.section id="3Setp"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeOut", duration: 1.5 }}
                    viewport={{ once: true }}
                >
                    <h3 className="tropics"> {t('sectionBlog.3stStep')} </h3>
                    <h2 > {t('sectionBlog.3stStepTitle')} </h2>
                    <div className='lineSection'></div>


                    <div className="MarginAuto900px">
                        <p className="txt"> {t('sectionBlog.3stP1')} </p>
                        <p className="txt"> {t('sectionBlog.3stP2')} </p>

                        <p className="txtQuestion"> {t('sectionBlog.3stP3')}</p>
                        <p className="txtAnswer"> {t('sectionBlog.3stP4')}  </p>

                        <p className="txtQuestion"> {t('sectionBlog.3stP5')} </p>
                        <p className="txtAnswer"> {t('sectionBlog.3stP6')}  </p>

                        <p className="txtQuestion"> {t('sectionBlog.3stP7')} </p>
                        <p className="txtAnswer"> {t('sectionBlog.3stP8')} </p>

                        <p className="txtQuestion"> {t('sectionBlog.3stP9')} </p>
                        <p className="txtAnswer"> {t('sectionBlog.3stP10')}  </p>

                        <p className="txtQuestion"> {t('sectionBlog.3stP11')} </p>
                        <p className="txtAnswer"> {t('sectionBlog.3stP12')} </p>

                        <p className="txtQuestion"> {t('sectionBlog.3stP13')} </p>
                        <p className="txtAnswer lastAnswer"> {t('sectionBlog.3stP14')} </p>
                        <p className="txt"> {t('sectionBlog.3stP15')} </p>
                        <p className="txt"> {t('sectionBlog.3stP16')} </p>

                    </div>
                </motion.section>


                <motion.section id="4Step"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeOut", duration: 1.5 }}
                    viewport={{ once: true }}
                >
                    <h3 className="tropics"> {t('sectionBlog.4stStep')} </h3>
                    <h2 > {t('sectionBlog.4stStepTitle')} </h2>
                    <div className='lineSection'></div>

                    <div className="MarginAuto900px">
                        <p className="txt"> {t('sectionBlog.4stP1')} </p>
                        <p className="txt"> {t('sectionBlog.4stP2')} </p>
                        <p className="txt"> {t('sectionBlog.4stP3')}  </p>
                        <p className="txt"> {t('sectionBlog.4stP4')} </p>
                        <p className="txt"> {t('sectionBlog.4stP5')} </p>
                        <div className="box">
                            <p className="txt"> {t('sectionBlog.4stP6')} </p>
                            <p className="txt"> <span className="destac"> {t('sectionBlog.4stP7')} </span> {t('sectionBlog.4stP8')} </p>
                            <p className="txtAnswer marginBottom"> {t('sectionBlog.4stP9')} <span className="cWhite">&lt;section&gt;</span> {t('sectionBlog.4stP10')} <span className="cWhite">&lt;div&gt;</span> {t('sectionBlog.4stP11')} <span className="cWhite">display: flex</span> {t('sectionBlog.4stP12')} <span className="cWhite">flex-direction: column</span>”. </p>
                            <p className="txt"> <span className="destac">OBS:</span> O hábito de se imaginar codificando um projeto trás muitos benefícios, afinal você já planejando como criar o que está vendo através das linhas de códigos. Desenvolvedores experientes conseguem descrever passo a passo de como criar um projeto apenas olhando para ele. </p>
                        </div>
                        <p className="txt"> Com o design criado você já está preparado para iniciar a codificação do seu projeto. </p>

                    </div>
                </motion.section>


                <motion.section id="5Step"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeOut", duration: 1.5 }}
                    viewport={{ once: true }}
                >
                    <h3 className="tropics">  {t('sectionBlog.5stStep')} </h3>
                    <h2 > {t('sectionBlog.5stStepTitle')} </h2>
                    <div className='lineSection'></div>

                    <div className="MarginAuto900px">
                        <p className="txt"> {t('sectionBlog.5stP1')} </p>
                    </div>
                </motion.section>

                <motion.section id="6Step"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeOut", duration: 1.5 }}
                    viewport={{ once: true }}
                >
                    <h3 className="tropics">  {t('sectionBlog.6stStep')} </h3>
                    <h2> {t('sectionBlog.6stStepTitle')} </h2>
                    <div className='lineSection'></div>

                    <div className="MarginAuto900px">
                        <p className="txt"> {t('sectionBlog.6stP1')}  </p>
                        <p className="txt"> {t('sectionBlog.6stP2')} </p>
                        <p className="txt"> {t('sectionBlog.6stP3')} </p>
                        <p className="txt"> {t('sectionBlog.6stP4')} </p>
                    </div>
                </motion.section>


                <motion.section id="finale"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeOut", duration: 1.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="tropics"> {t('sectionBlog.finale')}  </h2>
                    <div className='lineSection'></div>

                    <div className="MarginAuto900px">


                        <p className="txt"> {t('sectionBlog.finaleP1')}  </p>
                        <p className="txt"> {t('sectionBlog.finaleP2')}  </p>

                    </div>
                </motion.section>

            </section>

            <Footer />
        </main >
    )
}