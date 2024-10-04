import React, {useRef} from "react";
import {useState} from "react";
import * as Icon from 'react-bootstrap-icons';
import '../styles/components/footer.sass'
import '../i18n/i18nflts'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Decoration from "./Dcoration";



export default function Footer() {
    const { t, i18n } = useTranslation();
    const form = useRef();

    const [nameInput, setNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [messageInput, setMessageInput] = useState('')

    const handleNameInputChange = (event) => setNameInput(event.target.value)
    const handleEmailInputChange = (event) => setEmailInput(event.target.value)
    const handleMessageInputChange = (event) => setMessageInput(event.target.value)

    const sendEmail = (e) => {
        e.preventDefault();
        

        emailjs
      .sendForm('service_guk0y4j', 'template_klagksw', form.current, {
        publicKey: 'Eog3_DKg2RNz8one4',
      }
    )
      .then(
        () => {
            toast.success(t('sectionContainer.messageSuccess'))
            setNameInput('')
            setEmailInput('')
            setMessageInput('')
            return
        },
        (error) => {
           toast.error('ERRO: Formulário não enviado')
           return
        },
      );
  };

    return (
        <>
            <section id='contact'>
            <Decoration />

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

                        <form ref={form}  onSubmit={sendEmail}>
                            <label> {t('sectionContact.p2')} </label>
                            <input 
                                className='inputTxt' 
                                type="text" 
                                name="from_name" 
                                id="" 
                                required
                                autocomplete="off"
                                onChange={handleNameInputChange}
                                value={nameInput}
                                placeholder={t('sectionContact.placeholderName')}
                            />

                            <label> {t('sectionContact.p3')} </label>
                            <input 
                                className='inputTxt' 
                                type="email" 
                                name="from_email" 
                                id="" 
                                required
                                autocomplete="off"
                                onChange={handleEmailInputChange}
                                value={emailInput}
                                placeholder={t('sectionContact.placeholderEmail')}
                            />


                            <label> {t('sectionContact.p5')} </label>
                            <textarea name="message"
                                autocomplete="off"
                                onChange={handleMessageInputChange}
                                value={messageInput}
                                placeholder={t('sectionContact.placeholderMessage')}
                            >
                            </textarea>

                            <div className='lineBtn'>
                                <button className="btnFill" type="submit"> <Icon.SendCheckFill className="iconBtn" /> {t('sectionContact.btn')} </button>
                            </div>
                        </form>

                        <ToastContainer 
                            position="bottom-right"
                            theme="dark"
                            color="red"
                        />
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
                
            <motion.div className="socialMidias"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeOut", duration: 1.5 }}
                viewport={{ once: true }}
            >
            <Link to="https://github.com/ErikPradoDev" target='_blank'>
                <p> <Icon.Github className='iconFooter' size={20} fill='#F87E00'/> | GitHub  </p>
            </Link>

            <Link to="https://www.linkedin.com/in/erikpradodev/" target='_blank'>     
                <p> <Icon.Linkedin className='iconFooter' size={20} fill='#F87E00'/> | LinkedIn</p>
            </Link>
            </motion.div>
                
                

            </footer>

        </>

    )
}