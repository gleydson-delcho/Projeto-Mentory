import './Students.css';
import React from 'react';
import logo from '../../assets/images/logo.png';
import back from '../../assets/images/back.svg'
import { Link } from 'react-router-dom';

// import Header from './Header';
// import Content from './Content';

export default props =>    
        <div className="container">
            <header className="header">
                <div className="topbar-container">
                    <Link to="/">
                        <img src={ back } alt="back"/>
                    </Link>
                    <img src={ logo } alt="logo"/>
                </div>
            </header>
            <div className="students-content">
                <strong>Esses são os mentores disponíveis</strong>
                
            </div>
        </div>
       