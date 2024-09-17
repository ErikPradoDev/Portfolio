import React from "react";
import * as Icon from 'react-bootstrap-icons';
import '../styles/components/footer.sass'

export default function Footer(){
    return(
        <footer className="MarginAuto1100px flex">
            <p> Mande with <Icon.HeartFill className="iconHeart"/> by <span>Erik Prado</span>.</p>
        </footer>
    )
}