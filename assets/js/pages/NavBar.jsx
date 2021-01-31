import React from 'react';
import { Link } from 'react-router-dom';
import Model from './Model';

const NavBar = () => {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link to="/" className="navbar-brand">Generator Resume</Link>
        <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/model" className="nav-link">Modèle</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contactez-nous</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">A propos</Link>
                </li>
            </ul>

        </div>
    </nav >
};

export default NavBar;