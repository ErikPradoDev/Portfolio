import '../styles/components/columnTools.sass';
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React, {useState} from "react";
import { motion } from 'framer-motion';


export default function ColumnTools(){
    const { t, i18n } = useTranslation();

    const [show, setShow] = useState(false);

    const onShowClick =() => {
    if(show == false) {
        setShow(true);
    } else setShow(false);
    };

    const changeLanguage=(lng) =>{
    i18n.changeLanguage(lng);
    };

    return(
        <div id="columnToolsSize">
            <div className='btnSizeLine'>       
                <Link to="https://github.com/ErikPradoDev" target='_blank'>
                    <motion.button className='btnLink'
                        initial={{ opacity: 0}}
                        whileInView={{ opacity: 1}}
                        transition={{ ease: "easeOut", duration: 1.5, delay: 0.2 * 1 }}
                        viewport={{ once: true }}
                    >
                        <Icon.Github className='iconGitHub' size={25} fill='#FFF'/>
                        <p className='gitHubTxt'> GitHub | </p>
                    </motion.button>
                </Link>
            </div>

                <div className='btnSizeLine'>  
            <Link to="https://www.linkedin.com/in/erikpradodev/" target='_blank'>     
                    <motion.button className='btnLink'
                        initial={{ opacity: 0}}
                        whileInView={{ opacity: 1}}
                        transition={{ ease: "easeOut", duration: 1.5, delay: 0.2 * 2 }}
                        viewport={{ once: true }}
                    >
                        <Icon.Linkedin className='iconLinkedIn' size={25} fill='#FFF'/>
                        <p className='linkedInTxt'> LinkedIn | </p>
                    </motion.button>
            </Link>
                </div>
            <div className='btnSizeLine'>        
                <motion.button className='btnLink' onClick={onShowClick}
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{ ease: "easeOut", duration: 1.5, delay: 0.2 * 3 }}
                    viewport={{ once: true }}
                >

                {show && 
                    <div className='divLingLangSize'>
                        <p onClick={() => changeLanguage('en')}> <span className='colorOrange'>#</span> English - US </p>
                        <p onClick={() => changeLanguage('pt')}>  <span className='colorOrange'>#</span>  Português - BR </p>
                    </div>



                }

                    <Icon.Translate className='iconTranslate' size={25} fill='#FFF'/>
                    <p className='translateTxt'> Languages | </p>

                </motion.button>
            </div>
        </div>
    )
}