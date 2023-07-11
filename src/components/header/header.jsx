import "./header.css";
import React from "react";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="headerContainer">
            <h1>Ceci est un header</h1>
            <nav>
                <Link to="/">Accueil - </Link>
                <Link to="/cookiesBox">Les Box - </Link>
                <Link to="/cookiesChoice">Les Parfums de Cookies - </Link>
            </nav>
        </div>
    )
}