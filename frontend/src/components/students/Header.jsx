import './Header.css'
import React from 'react';
import logo from '../../assets/images/logo.png';
import back from '../../assets/images/back.svg'
import { Link } from 'react-router-dom';

export default props =>
    <header className="header">
        <div className="topbar-container">
            <Link to="/">
                <img src={ back } alt="back"/>
            </Link>
            <img src={ logo } alt="logo"/>
        </div>
    </header>

