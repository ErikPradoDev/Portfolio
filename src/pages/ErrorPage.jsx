import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/errorPage.sass';

export default function ErrorPage(){
    return(
        <>
        <h1> Essa é a ErrorPage </h1>

            <Link to="/"> Clique aqui para voltar para a página principal </Link>
        </>
    )
}