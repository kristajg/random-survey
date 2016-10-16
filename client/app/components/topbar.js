import React, { Component } from 'react';
import Api from '../services/api';

export default class Topbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <a href="/" className="navbar-brand">Random Survey</a>
          </div>

          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#">
                  <i className="glyphicon glyphicon-cog"></i> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}