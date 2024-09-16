import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/header.sass'

export default function Header(){
    return(
        <header> 
            <div className='MarginAuto1100px container'>
                <div>
                <Link to='/'> <p className='pLogo'> <span className='colorOrange'>&lt;</span>Epc <span className='colorOrange'>/&gt;</span> <span className='backHover'> | Back to Home </span> </p> </Link>
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
                                <Link to='/projects'> <span className='itemNav'> <span className='colorOrange mrgnLeft'>#</span>Projects </span> </Link>        
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>  
        </header>
    )
}