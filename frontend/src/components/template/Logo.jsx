import './Logo.css';
import logo from '../../assets/images/logo.png';
import React from 'react';

export default props => 
    <aside className="logo">
        <a href= '/' className="logo">
            <img src={ logo } alt="logo"/>
        </a>        
        <h2>Está é a plataforma de acompanhamento de estudos Mentory</h2>
    </aside>

