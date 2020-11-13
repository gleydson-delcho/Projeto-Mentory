import React from 'react';
import Header from '../students/Header';
import Forms from './Forms';

import '../students/Header.css';

const headerProps = { subtitle: "O primeiro passo é preencher este formulário"}

export default props => 
    <React.Fragment>                   
        <div className="container">   
            <Header {...headerProps} />
            <Forms />
        </div>            
    </React.Fragment>
