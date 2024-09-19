import '../styles/components/columnTools.sass';
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React, {useState} from "react";


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
                    <button className='btnLink'>
                        <Icon.Github className='iconGitHub' size={25} fill='#FFF'/>
                    </button>
                </Link>
            </div>

                <div className='btnSizeLine'>  
            <Link to="https://www.linkedin.com/in/erikpradodev/" target='_blank'>     
                    <button className='btnLink'>
                        <Icon.Linkedin className='iconLinkedIn' size={25} fill='#FFF'/>
                    </button>
            </Link>
                </div>
            <div className='btnSizeLine'>        
                <button className='btnLink' onClick={onShowClick}>

                {show && 
                    <div className='divLingLang'>
                        <button className='btnLang' onClick={() => changeLanguage('pt')}>PT</button>
                         -
                        <button className='btnLang' onClick={() => changeLanguage('en')}>EN</button>
                        |
                    </div>
                }

                    <Icon.Translate className='iconTranslate' size={25} fill='#FFF'/>
                </button>
            </div>
        </div>
    )
}