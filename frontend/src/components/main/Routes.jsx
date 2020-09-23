import React from 'react';
import { Switch, Route, Redirect } from 'react-router';


import Home from '../home/Home';
import Student from'../students/Students';

export default props => 
    <Switch >
        <Route exact path='/' component={Home} />
        <Route path='/students' component={Student} />
        {/* <Route path='/mentors' component={Mentor} /> */}
        <Redirect from='*' to='/' />
    </Switch>