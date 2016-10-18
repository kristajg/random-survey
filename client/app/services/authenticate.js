// import jwt from 'jsonwebtoken';
import Api from './api';
import { browserHistory } from 'react-router';

function authenticateUser() {
  // check localStorage for token
  let session = localStorage.getItem('sessionID');

  // check current route
  let currentRoute = window.location.href.toString();

  if(!session && currentRoute.indexOf('login') === -1) {
    // If no session, redirect to login screen
    console.log('no session?')

    // Clear out localStorage
    localStorage.clear();

    // Redirect to login screen
    browserHistory.push('/login');
  }
  // else {
    // if it does exist, decode jwt & check against db for legitimacy

    // if it's no bueno, log them out
  // }

}

export { authenticateUser };