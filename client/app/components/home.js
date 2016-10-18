import React, { Component } from 'react';
import Api from '../services/api';
import Topbar from './topbar';
import Form from './form';
import { Link } from 'react-router';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.surveySubmit = this.surveySubmit.bind(this);
  }

  componentWillMount() {
    // hit api to get initial unique survey question
    // Api.getUser
  }

  surveySubmit() {
    // submit answer to db

    // give new question if one is available
  }

  render() {
    return (
      <div>
        <Topbar />
        <div className="container">
          Surveys go here

            <Link to="/login">
              Login ??
            </Link>

          <Form />
        </div>      
      </div>
    );
  }
}