import './Header.css'
import React from 'react';
import logo from '../../assets/images/logo.png';
import back from '../../assets/images/back.svg'
import { Link } from 'react-router-dom';

export default props =>
    <header>
        <div className="container">        
            <div className="topbar-container">
                <div className="topbar">
                    <Link to="/">
                        <img src={ back } classname="back" alt="back"/>
                    </Link>
                    <img src={ logo } classname="logo" alt="logo"/>
                </div>                
            </div>            
            <div className="students-content">
                <strong>Que incrível você querer fazer parte dessa iniciativa</strong>  
                <p classname="lead">{props.subtitle}</p>         
            </div>
        <div/>
     </div>  
    </header>