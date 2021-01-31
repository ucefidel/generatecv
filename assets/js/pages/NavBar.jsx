import React from 'react';
import { Link } from 'react-router-dom';
import Model from './Model';

const NavBar = () => {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">Generator Resume</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
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