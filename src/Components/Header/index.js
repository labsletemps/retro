import React from 'react';
import './styles.css';
import logo from '../../logobig.gif';

const Header = () => (
    <header className="header">
        <div className="logo">
            <img src={ logo } alt="Le Temps"/>
            <span className="tagline">Quotidien Suisse edité à Genève</span>
        </div>
    </header>
);

export default Header;