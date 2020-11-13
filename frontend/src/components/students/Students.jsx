import './Students.css';
import React from 'react';
import Content from './StudentsSearch';

import Header from './Header';

const headerProps = { subtitle: "Esses são os proffys disponíveis"}

export default props =>  
    <React.Fragment>                   
        <div className="container">   
            <Header {...headerProps} />  
            <Content />
        </div>            
    </React.Fragment>
        
       