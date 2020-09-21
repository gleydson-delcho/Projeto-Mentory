import './Logo.css';
import logo from '../../assets/images/logo.png';
import React from 'react';
import { Link } from 'react-router-dom';

export default props => 
    <aside className="logo">
        <Link to= '/' className="logo">
            <img src={ logo } alt="logo"/>
        </Link>        
        <h2>Está é a plataforma de acompanhamento de estudos Mentory</h2>
    </aside>

