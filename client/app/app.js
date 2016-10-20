// Framework and routing
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { authenticateUser } from './services/authenticate';

// Include styles
import Styles from './assets/stylesheets/less/main.less';

// Import components for routing
import Home from './components/home';
import Login from './components/login';
import Admin from './components/admin';

render(
  <Router
    history={browserHistory}
    onLoad={authenticateUser}
    onUpdate={authenticateUser}>

    <Route path="/" component={Home}/>
    <Route path="/admin" component={Admin}/>
    <Route path="/login" component={Login}/>
  </Router>,
  document.getElementById('app')
);
