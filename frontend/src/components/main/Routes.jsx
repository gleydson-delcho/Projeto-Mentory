import React from 'react';
import { Switch, Route, Redirect } from 'react-router';


import Body from '../home/Body';
import Student from'../students/Students';

export default props => 
    <Switch >
        <Route exact path='/' component={Body} />
        <Route path='/students' component={Student} />
        {/* <Route path='/mentors' component={Mentor} /> */}
        <Redirect from='*' to='/' />
    </Switch>