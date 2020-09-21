import './Body.css';
import React from 'react';
import Logo from './Logo';
import Footer from './Footer';
import student from '../../assets/images/usericon.png';
import master from '../../assets/images/pusericon.png'
import landing from '../../assets/images/landing.png'

export default props => 
    <React.Fragment>
    <div className="page-landing" id="page-landing">
            <div className="content">
                <Logo />
                <img src= {landing } alt="landing"/> 
            </div>
        <div id="container">
            <div className="buttons-container">
                <div className="buttons">

                    <a href="/users" className="users">
                        <img src= { student } alt="user"/>Estudantes
                    </a>
                    <a href="/users" className="master">
                        <img src={ master } alt="user-master"/>Mentores
                    </a>
                </div>
                <Footer />
            </div>
        </div>
    </div>
    </React.Fragment>