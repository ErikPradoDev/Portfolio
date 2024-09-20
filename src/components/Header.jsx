import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/header.sass'
import ColumnTools from './ColumnTools';
import '../i18n/i18nflts';
import { useTranslation } from 'react-i18next'


export default function Header(){
    const { t, i18n } = useTranslation();
    return(
        <header> 
            <ColumnTools />
            <div className='MarginAuto1000px container'>
                <div>
                <Link to='/'> <p className='pLogo'> <span className='colorOrange'>&lt;</span>Epc <span className='colorOrange'>/&gt;</span> <span className='backHover'> {t('header.txtHover')} </span> </p> </Link>
                </div>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/'> <span className='itemNav'> <span className='colorOrange'>#</span>Home  </span> </Link>
                            </li>

                            <li>
                                <Link to='/blog'> <span className='itemNav'> <span className='colorOrange mrgnLeft'>#</span>Blog </span>  </Link>
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