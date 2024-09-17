import '../styles/components/columnTools.sass';
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

export default function ColumnTools(){
    return(
        <div id="columnToolsSize">
            <div className='btnSizeLine'>       
                <Link to="https://github.com/ErikPradoDev" target='_blank'>
                    <button className='btnLink'>
                        <p className='pLinkGitHub'> GitHub | </p>
                        <Icon.Github className='iconGitHub' size={25} fill='#FFF'/>
                    </button>
                </Link>
            </div>

                <div className='btnSizeLine'>  
            <Link to="https://www.linkedin.com/in/erikpradodev/" target='_blank'>     
                    <button className='btnLink'>
                    <p className='pLinkLinkedIn'> LinkedIn | </p>
                        <Icon.Linkedin className='iconLinkedIn' size={25} fill='#FFF'/>
                    </button>
            </Link>
                </div>
            <div className='btnSizeLine'>        
                <button className='btnLink'>
                    <Icon.Translate className='iconTranslate' size={25} fill='#FFF'/>
                </button>
            </div>
        </div>
    )
}