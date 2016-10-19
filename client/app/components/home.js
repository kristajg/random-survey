import React, { Component } from 'react';
import Api from '../services/api';
import Topbar from './topbar';
import Form from './form';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.surveySubmit = this.surveySubmit.bind(this);
  }

  componentWillMount() {
    // Get unique survey question
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
          <Form />
        </div>
      </div>
    );
  }
}