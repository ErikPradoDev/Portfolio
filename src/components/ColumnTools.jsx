import '../styles/components/columnTools.sass';
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'


export default function ColumnTools(){
    const { t, i18n } = useTranslation();

    const changeLanguage=(lng) =>{
    i18n.changeLanguage(lng);
    };

    return(
        <div id="columnToolsSize">
            <div className='btnSizeLine'>       
                <Link to="https://github.com/ErikPradoDev" target='_blank'>
                    <button className='btnLink'>
                        <p className='pLinkGitHub'> GitHub |  </p>
                        <Icon.Github className='iconGitHub' size={25} fill='#FFF'/>
                    </button>
                </Link>
            </div>

                <div className='btnSizeLine'>  
            <Link to="https://www.linkedin.com/in/erikpradodev/" target='_blank'>     
                    <button className='btnLink'>
                    <p className='pLinkLinkedIn'> LinkedIn |  </p>
                        <Icon.Linkedin className='iconLinkedIn' size={25} fill='#FFF'/>
                    </button>
            </Link>
                </div>
            <div className='btnSizeLine'>        
                <button className='btnLink'>
                <p className='pLinkLang'> <button className='btnLang' onClick={() => changeLanguage('pt')}>PT</button> - <button className='btnLang' onClick={() => changeLanguage('en')}>EN</button> |  </p>
                    <Icon.Translate className='iconTranslate' size={25} fill='#FFF'/>
                </button>
            </div>
        </div>
    )
}