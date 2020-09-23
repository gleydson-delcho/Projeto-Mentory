import './Header.css'
import React from 'react';
import logo from '../../assets/images/logo.png';
import back from '../../assets/images/back.svg'
import { Link } from 'react-router-dom';

export default props =>
    <header className="header">
        <div className="topbar-container">
            <div className="topbar">
                <Link to="/">
                    <img src={ back } classname="back" alt="back"/>
                </Link>
                <img src={ logo } classname="logo" alt="logo"/>
            </div>
            <div className="students-content">
                <strong>Que incrível você procurar por nós!</strong>
                <p>O primeiro passo será preencher este formulário de inscrição</p>
            </div> 
        </div>
    </header>
