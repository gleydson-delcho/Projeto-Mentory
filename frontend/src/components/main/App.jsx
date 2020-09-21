import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';
// import Body from '../home/Body';


export default props =>
    <BrowserRouter>
    <div className="app">
        <Routes />
    </div>
    </BrowserRouter>