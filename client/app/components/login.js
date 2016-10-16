import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div>
        <div className="container">
          Login redirect here

          <label>User sign in:</label>
          <input type='text' onChange='' />

          <label>Password</label>
          <input type='password' onChange='' />
        </div>      
      </div>
    );
  }
}