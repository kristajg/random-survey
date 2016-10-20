import React, { Component } from 'react';
import Api from '../../services/api';
import { Link } from 'react-router';

export default class Topbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userType: ''
    };

    this.logOut = this.logOut.bind(this);
  }

  componentWillMount() {
    Api.getSingleUser(localStorage.getItem('sessionID'), (response) => {
      this.setState({
        userType: response[0].type
      });
    });    
  }

  logOut() {
    // Clear out localStorage
    localStorage.clear();
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <a href="/" className="navbar-brand">Random Survey</a>
          </div>

          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li style={{ display: this.state.userType!=="admin" ? "none" : "" }}>
                <Link to="admin">
                  Admin
                </Link>
              </li>            
              <li>
                <a href="#" onClick={this.logOut}>
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