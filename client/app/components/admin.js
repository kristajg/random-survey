import React, { Component } from 'react';
import Api from '../services/api';
import Topbar from './topbar';

export default class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userType: ''
    };
  }

  componentWillMount() {
    Api.getSingleUser(localStorage.getItem('sessionID'), (response) => {
      this.setState({
        userType: response[0].type
      });
    });

    // Get relevant user data
    // Api.getAnsweredQuestions
  }

  render() {
    let content;

    if(this.state.userType==="admin") {
      <div>
        Welcome admin
      </div>
    } else {
      content = 
      <div>
        You do not have permission to view this content.
      </div>;
    }
    return (
      <div>
        <Topbar />
        <div className="container">
          Admin piece goes here
          {content}
        </div>      
      </div>
    );
  }
}