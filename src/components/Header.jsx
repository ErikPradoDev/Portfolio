import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <div> 
            <Link to='/'> <span style={{marginRight:10}}> Home </span> </Link>
            <Link to='/blog'> <span style={{marginRight:10}}> TwoPage </span> </Link>
            <Link to='/projects'> <span> ThreePage </span> </Link>        
        </div>
    )
}