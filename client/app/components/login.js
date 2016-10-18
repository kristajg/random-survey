import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        email: '',
        password: ''        
      },
      formErrors: {
        emailError: false,
        passwordError: false
      }
    }

    this.handleTextChange = this.handleTextChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleTextChange(e) {
    let formData = Object.assign({}, this.state.formData),
      { formErrors } = this.state;

    formData[e.target.name] = e.target.value;

    this.setState({
      formData: formData
    });

    // Remove errors if no longer valid
    let emailError = !formData.email.length ? true : false,
      passwordError = !formData.password.length ? true : false;

    this.setState({
      formErrors: {
        emailError: emailError,
        passwordError: passwordError
      }
    });
  }

  submit() {
    let { formData } = this.state;

    let emailError = !formData.email.length ? true : false,
      passwordError = !formData.password.length ? true : false;

    this.setState({
      formErrors: {
        emailError: emailError,
        passwordError: passwordError
      }
    });

    // if no errors, submit
    if(!emailError && !passwordError) {
      // submit to db
      console.log('yay ', formData);
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <h2>Please sign in to proceed</h2>

          <label>User Email</label>
          <input type='text' name='email' onChange={this.handleTextChange} />
          <span style={{ display: this.state.formErrors.emailError ? 'block' : 'none', color: 'red' }}>Email is a required field.</span>
          <br />
          <label>Password</label>
          <input type='password' name='password' onChange={this.handleTextChange} />
          <span style={{ display: this.state.formErrors.passwordError ? 'block' : 'none', color: 'red' }}>Password is a required field.</span>
          <br />
          <button onClick={this.submit}>Submit</button>
        </div>      
      </div>
    );
  }
}