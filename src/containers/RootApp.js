import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import List from '../components/List';

const RootApp = () =>
    <Router>
        <div>
            <Switch>
                <Route path="/" exact component={List}/>
            </Switch>
        </div>
    </Router>;

export default RootApp;