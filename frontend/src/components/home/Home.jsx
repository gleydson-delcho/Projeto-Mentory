import './Home.css';
import React from 'react';
import Logo from '../template/Logo';
import Footer from '../template/Footer';
import student from '../../assets/images/usericon.png';
import master from '../../assets/images/pusericon.png';
import landing from '../../assets/images/landing.png';
import { Link } from 'react-router-dom';

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

                    <Link to="/students" className="students">
                        <img src= { student } alt="user"/>Estudantes
                    </Link>
                    <Link to="/mentors" className="master">
                        <img src={ master } alt="user-master"/>Mentores
                    </Link>
                </div>
                <Footer />
            </div>
        </div>
    </div>
    </React.Fragment>